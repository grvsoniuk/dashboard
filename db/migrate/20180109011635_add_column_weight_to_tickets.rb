class AddColumnWeightToTickets < ActiveRecord::Migration[5.0]
  def change
  	add_column :tickets, :weight, :integer, :default => 0
  	Ticket.reset_column_information
  	update_all_tickets_weight
  end

  def update_all_tickets_weight
  	Ticket.all.each do |ticket|
  	  ticket.weight = Ticket::PRIORITY_HEAT[ticket.priority]*Ticket::STATUS_HEAT[ticket.status] unless (ticket.priority.blank? or ticket.status.blank?)
  	  ticket.save
  	end
  end
end
