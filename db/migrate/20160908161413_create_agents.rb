class CreateAgents < ActiveRecord::Migration[5.0]
  def change
    create_table :agents, id: false do |t|
      t.primary_key  :id, limit: 8
      t.text      :url
      t.string    :name
      t.string    :email
      t.datetime  :created_at
      t.datetime  :updated_at
      t.string    :time_zone
      t.string    :phone
      t.string    :shared_phone_number
      t.text      :photo
      t.integer   :locale_id, limit: 8
      t.string    :locale
      t.integer   :organization_id, limit: 8
      t.string    :role
      t.boolean   :verified
      t.integer   :external_id, limit: 8
      t.text      :tags
      t.string    :alias
      t.boolean   :active
      t.boolean   :shared
      t.boolean   :shared_agent
      t.datetime  :last_login_at
      t.boolean   :two_factor_auth_enabled
      t.text      :signature
      t.text      :details
      t.text      :notes
      t.integer   :custom_role_id, limit: 8
      t.boolean   :moderator
      t.boolean   :ticket_restriction
      t.boolean   :only_private_comments
      t.boolean   :restricted_agent
      t.boolean   :suspended
      t.boolean   :chat_only
      t.text      :user_fields
    end
  end
end
