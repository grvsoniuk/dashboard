class OrganisationWorker
  include Sidekiq::Worker
  sidekiq_options :retry => false

  def perform(*args)
    zd_client = ZendeskClient.instance
    zd_client.organizations.all! do |org|
      agent = Organization.find_or_initialize_by(id: org.id)
      agent.update(org.to_hash)
      agent.save
    end
  end
end
