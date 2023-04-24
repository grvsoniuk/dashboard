class CreateSavedSearches < ActiveRecord::Migration[5.0]
  def change
    create_table :saved_searches do |t|
      t.string :name
      t.text :query
      t.integer :user_id

      t.timestamps
    end
  end
end
