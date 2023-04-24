class AgentWorker
  include Sidekiq::Worker
  sidekiq_options :retry => false

  def perform(*args)
  	zd_client = ZendeskClient.instance
  	agent_types = Agent::AGENT_TYPES

  	agent_types.each do |agent_type|
  	  	# Pull agent count
  	  	agents_count = zd_client.search(:query => "type:user role:#{agent_type}").count
  	  	# Pull all agents
  	  	page = 1
		while agents_count > 0
			agents = zd_client.search(:query => "type:user role:#{agent_type}", :page => page).fetch!
		  	save_agents(agents, agent_type, page)
		  	agents_count = agents_count - agents.count
	    	page += 1
	    	break if agents.count == 0
		end
  	end
  end

  def save_agents(agents, agent_type, page)
    puts "For #{agent_type} at page #{page} there are #{agents.count} records"
  	agents.each do |agent|
      begin
        t = Agent.find_or_initialize_by(id: agent.id)
        attributes = agent.to_hash
        attributes.delete('role_type')
        attributes.delete('iana_time_zone')
        attributes.delete('report_csv')
        attributes.delete('default_group_id')
        
        t.update(attributes)
        t.save_without_auditing  
      rescue Exception => e
        puts "Error::: Something went wrong with agent id : #{agent.id}. Record not saved/updated."
        puts e.message
      end
    end
  end
end