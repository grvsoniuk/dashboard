class UpdateOrganizationsJob < ApplicationJob
  queue_as :update_orgs

  def perform(*args)
    zd_client = ZendeskClient.instance
    zd_client.organizations.all! do |org|
      agent = Organization.find_or_initialize_by(id: org.id)
      agent.update(org.to_hash)
      agent.save
    end
  end
end
