class UpdateAgentsJob < ApplicationJob
  queue_as :update_agents

  # Job to update agent information via background task
  def perform(*args)
    zd_client = ZendeskClient.instance
    zd_client.users.all! do |user|
      agent = Agent.find_or_initialize_by(id: user.id)
      agent.update(user.to_hash)
      agent.save
    end
  end
end
