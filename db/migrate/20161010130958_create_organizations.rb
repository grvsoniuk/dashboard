class CreateOrganizations < ActiveRecord::Migration[5.0]
  def change
    create_table :organizations, id: false do |t|
      t.primary_key  :id, limit: 8
      t.string :url
      t.string :external_id
      t.string :name
      t.text :domain_names
      t.text :details
      t.text :notes
      t.integer :group_id
      t.boolean :shared_tickets
      t.boolean :shared_comments
      t.text :tags
      t.text :organization_fields

      t.timestamps
    end
  end
end
