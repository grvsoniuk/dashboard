class AddColumnEmailCcIdsToTicketsTemp < ActiveRecord::Migration[5.0]
  def change
  	add_column :ticket_temps, :email_cc_ids, :text
  end
end
