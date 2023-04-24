class AlterAdminToRole < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :admin, :role
    change_column :users, :role, :integer, :default => 0, :null => false
  end
end
