class TicketAllWorker
  include Sidekiq::Worker
  sidekiq_options :retry => false

  def perform(*args)
    zd_client = ZendeskClient.instance
    statuses = Ticket::STATUS_NEED_ATTENTION

    TicketTemp.delete_all
    TicketTemp.record_timestamps=false
    Ticket.record_timestamps=false
    
    statuses.each do |status|
    	# Pull ticket count
    	tickets_count = zd_client.search(:query => "type:ticket status:#{status}").count
      # Pull all tickets
      page = 1
    	while tickets_count > 0
    		tickets = zd_client.search(:query => "type:ticket status:#{status}", :page => page).fetch!
        
    		save_tickets(tickets, status, page)
    		tickets_count = tickets_count - tickets.count
        page += 1
        break if tickets.count == 0
    	end
    end

    copy_tickets_from_ticket_temps
  end

  def copy_tickets_from_ticket_temps
    ActiveRecord::Base.transaction do
      Ticket.delete_all
      ActiveRecord::Base.connection.execute("INSERT INTO tickets SELECT * FROM ticket_temps;")
    end
  end

  def save_tickets(tickets, status, page)
    puts "For #{status} at page #{page} there are #{tickets.count} records"
  	tickets.each do |ticket|
      begin
        t = TicketTemp.find_or_initialize_by(id: ticket.id)
        attributes = ticket.to_hash
        attributes.delete('follower_ids')
        attributes.delete('satisfaction_probability')
        attributes.delete('allow_attachments')
        if ticket.status == 'solved' or ticket.status == 'closed'
          t.destroy
        else
          t.update(attributes)
          t.save
        end
      rescue Exception => e
        puts e.message
        puts "Error::: Something went wrong with ticket id : #{ticket.id}. Record not saved/updated."
      end
    end
  end
end