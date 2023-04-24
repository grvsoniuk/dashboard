class AddDefaultGroupIdToAgents < ActiveRecord::Migration[5.0]
  def change
  	add_column :agents, :default_group_id, :integer
  end
end
