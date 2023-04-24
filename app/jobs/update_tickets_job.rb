class UpdateTicketsJob < ApplicationJob
  queue_as :update_tickets

  def perform(*args)
    zd_client = ZendeskClient.instance
    zd_client.tickets.all! do |ticket|
      agent = Ticket.find_or_initialize_by(id: ticket.id)
      agent.update(ticket.to_hash)
      agent.save
    end
  end
end
