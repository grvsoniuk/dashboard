class CreateTickets < ActiveRecord::Migration[5.0]
  def change
    create_table :tickets, id: false do |t|
      t.primary_key  :id, limit: 8
      t.text         :url
      t.integer      :external_id, limit: 8
      t.text         :via
      t.datetime     :created_at
      t.datetime     :updated_at
      t.string       :type
      t.text         :subject
      t.text         :raw_subject
      t.text         :description
      t.string       :priority
      t.string       :status
      t.text         :recipient
      t.integer      :requester_id, limit: 8
      t.integer      :submitter_id, limit: 8
      t.integer      :assignee_id, limit: 8
      t.integer      :organization_id, limit: 8
      t.integer      :group_id, limit: 8
      t.text         :collaborator_ids
      t.integer      :forum_topic_id, limit: 8
      t.integer      :problem_id, limit: 8
      t.boolean      :has_incidents
      t.boolean      :is_public
      t.datetime     :due_at
      t.text         :tags
      t.text         :custom_fields
      t.text         :satisfaction_rating
      t.text         :sharing_agreement_ids
      t.text         :fields
      t.text         :followup_ids
      t.integer      :ticket_form_id, limit: 8
      t.integer      :brand_id, limit: 8
      t.boolean      :allow_channelback
    end
  end
end
