class AddColumnResultTypeToAgents < ActiveRecord::Migration[5.0]
  def change
  	add_column :agents, :result_type, :string
  end
end
