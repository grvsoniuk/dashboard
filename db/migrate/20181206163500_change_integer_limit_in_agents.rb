class ChangeIntegerLimitInAgents < ActiveRecord::Migration[5.0]
  def change
  	change_column :agents, :id, :integer, :limit => 8
  end
end
