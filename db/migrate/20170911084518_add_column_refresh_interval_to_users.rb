class AddColumnRefreshIntervalToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :refresh_interval, :integer, :default => 0
  end
end
