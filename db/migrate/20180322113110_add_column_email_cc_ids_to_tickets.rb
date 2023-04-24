class AddColumnEmailCcIdsToTickets < ActiveRecord::Migration[5.0]
  def change
  	add_column :tickets, :email_cc_ids, :text
  end
end
