class DashboardController < ApplicationController
  layout "main"
  
  def index
    query = {}
    if params["id"]
      saved_search = SavedSearch.find(params["id"])
      query = saved_search.present? ? YAML::load(saved_search.query) : get_search_from_user_default
    else
      query = get_search_from_user_default
    end
    @offices = query[:offices].present? ? Office.find(query[:offices]) : nil
    @teams = query[:teams].present? ? Team.find(query[:teams]) : nil
    @priorities = query[:priorities] || nil
    @statuses = query[:statuses] || nil
  end

  def tests
    @zd_client = ZendeskClient.instance
  end

  def update_agents
    AgentWorker.perform_async
    head :ok
  end

  def update_tickets
    TicketWorker.perform_async
    head :ok
  end

  def update_all_tickets
    TicketAllWorker.perform_async
    head :ok
  end

  def update_organizations
    OrganisationWorker.perform_async
    head :ok
  end

  def search
    query = params['saved_search']['query']
    @offices = query.present? && query['offices'].present? ? Office.where(id: query["offices"]) : Office.all
    @teams = query.present? && query['teams'].present? ? Team.where(id: query["teams"]) : Team.all
    @priorities = query.present? && query['priorities'].present? ? query["priorities"] : nil
    @statuses = query.present? && query['statuses'].present? ? query["statuses"] : nil
  end

  def save_search
    query = params['saved_search']['query'].present? ? params['saved_search']['query'] : User::BLANK_QUERY
    begin
      SavedSearch.transaction do
        current_user.saved_searches.update_all(is_default: false)
        @saved_search = SavedSearch.find_or_initialize_by({name: params['saved_search']['name'], user_id: params['saved_search']['user_id']})
        @saved_search.query = query.to_yaml
        @saved_search.save!
      end
      gflash :now => "Search Saved!"
      redirect_to dashboard_path(@saved_search)
    rescue Exception => e
      gflash :now, :error => "Could not save search!<br/>#{e.message}"
      redirect_to dashboard_path
    end
  end

  def make_default_search
    saved_search = SavedSearch.find(params[:id])
    if saved_search.present?
      ActiveRecord::Base.transaction do
        current_user.saved_searches.update_all(is_default: false)
        saved_search = SavedSearch.find(params[:id])
        saved_search.update({:is_default => true})
      end
    end
    head :ok
  end

  def tickets
    agent = Agent.find(params[:agent_id])
    status = params[:status] == "all" ? nil : params[:status]
    priority = params[:priority] == "all" ? nil : params[:priority]
    @tickets = agent.tickets(status, priority) if agent.present?
  end

  def new_tickets
    @new_tickets = Ticket.where(assignee_id: nil).where(status: Ticket::STATUS_NEW)
    render layout: "model"
  end

  def assign_ticket
    zd_client = ZendeskClient.instance
    ticket = ZendeskAPI::Ticket.find!(zd_client, :id => params[:ticket_id])
    ticket.assignee_id=params[:assignee_id]
    ticket.save!
  end

  def params
    request.parameters
  end

  def get_search_from_user_default
    YAML::load(current_user.default_saved_search.query)
  end
end