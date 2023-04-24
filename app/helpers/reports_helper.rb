module ReportsHelper
  def report(agents, type, startDate, endDate)
  	assignees = "assignee:"+agents.join(" assignee:")
  	query = "type:ticket #{assignees} "
  	if type == 'last_7_days'
  	  query = query + "created>=" + (Date.today-7.days).to_s
  	elsif type == 'last_30_days'
  	  query = query + "created>=" + (Date.today-30.days).to_s
  	elsif type == 'range'
  	  query = query + "created_at>=" + DateTime.parse(startDate).to_s + " created_at<=" + DateTime.parse(endDate).to_s
  	end
  	
	zd_client = ZendeskClient.instance
	tickets = []
	tickets_count = zd_client.search(:query => query).count
    page = 1
	while tickets_count > 0
	  t = zd_client.search(:query => query, :page => page).fetch!
	  tickets << t
	  tickets_count = tickets_count - t.count
      page += 1
      break if t.count == 0
	end
	tickets.flatten
  end
end

