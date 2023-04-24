class AlterAuditsIntegerLimitTo8 < ActiveRecord::Migration[5.0]
  def change
  	change_column :audits, :auditable_id, :integer, :limit => 8
  	change_column :audits, :associated_id, :integer, :limit => 8
  	change_column :audits, :user_id, :integer, :limit => 8
  	change_column :audits, :version, :integer, :limit => 8
  end
end
