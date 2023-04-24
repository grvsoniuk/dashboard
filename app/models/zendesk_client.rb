require 'zendesk_api'

class ZendeskClient < ZendeskAPI::Client

	def self.endpoint
		  if Rails.env == "development"
		  	"https://appdynamics1539022638.zendesk.com"
		  else
		  	"https://appdynamics.zendesk.com"
		  end
	end

	def self.instance
		instance = new do |config|
			config.url = "#{ZendeskClient.endpoint}/api/v2"
			if Rails.env == "development"
				config.username = "gaurav.soni@appdynamics.com"
				config.token = "wB0sp0wrgsAR4BgxJsUJkrsRwk6QwzhT7JWS7LH6"
				# config.username = "gaurav.soni@appdynamics.com"
			    # config.token = "8mVreah7F4FQ0VWg7PxdmiyRTzzUMwJUJ6HfWvNG"
			    require 'logger'
				config.logger = Logger.new(STDOUT)
			else
			  	config.username = "gaurav.soni@appdynamics.com"
			    config.token = "8mVreah7F4FQ0VWg7PxdmiyRTzzUMwJUJ6HfWvNG"
			end
			config.retry = false
		end
	end

	def self.zd_url(object)
		case object.class.name
			when "Agent"
				"#{ZendeskClient.endpoint}/agent/agents/#{object.id}"	
			when "Ticket"
				"#{ZendeskClient.endpoint}/agent/tickets/#{object.id}"
			when "Organization"
				"#{ZendeskClient.endpoint}/agent/organizations/#{object.id}"
		end
	end

end