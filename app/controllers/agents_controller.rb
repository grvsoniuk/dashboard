class AgentsController < ApplicationController
  layout "main"
  load_and_authorize_resource

  def index
  	respond_to do |format|
      format.html
      format.json { render json: AgentDatatable.new(view_context) }
    end
  end

  def all
    agents = Agent.all

    respond_to do |format|
      format.json { render json: { results: agents.map{ |agent| { id: agent.id, name: agent.name, team: (agent.team.present? ? agent.team.name : ""), update_at: agent.updated_at } } } }
    end
  end

  def mapping
    respond_to do |format|
      format.html
      format.js {
        @result = "success"
        begin
          Agent.transaction do
            Agent.where(id: params[:agents]).update_all(office_id: params[:office], team_id: params[:team])
          end
        rescue ActiveRecord::Rollback
          @result = "failure"
        end
      }
    end
  end

  def update
    Agent.find(params[:id]).update(office_id: params[:office_id], team_id: params[:team_id])
    head :ok
  end

  def add_as_user
    @agent = Agent.find(params[:agent_id])
    @agent.add_as_user
  end

  def remove_as_user
    @agent = Agent.find(params[:agent_id])
    @agent.remove_as_user
  end

  def search
  	if params[:term]
  	  @agents = Agent.where("name LIKE '%?%'", params[:term]).limit(params[:page_limit])
  	end
  	respond_to do |format|  
  	  format.html
  	  format.json { render :json =>{:results => @users.to_json(only: [:id, :name]) }}
  	end
  end
end
