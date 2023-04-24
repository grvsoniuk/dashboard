class AddDefaultToSavedSearches < ActiveRecord::Migration[5.0]
  def change
  	add_column :saved_searches, :is_default, :boolean, default: true
  end
end
