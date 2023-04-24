class AddColumnResultTypeToTickets < ActiveRecord::Migration[5.0]
  def change
  	add_column :tickets, :result_type, :string
  end
end
