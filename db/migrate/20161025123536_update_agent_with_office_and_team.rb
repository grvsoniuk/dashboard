class UpdateAgentWithOfficeAndTeam < ActiveRecord::Migration[5.0]
  def change
  	add_column :agents, :team_id, :integer
  	add_column :agents, :office_id, :integer
  end
end
