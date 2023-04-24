include AgentsHelper
class AgentDatatable < AjaxDatatablesRails::Base
  def_delegators :@view, :can?, :link_to, :image_tag, :agent_path, :select_tag, :options_from_collection_for_select


  def sortable_columns
    # Declare strings in this format: ModelName.column_name
    @sortable_columns ||= [
        "Agent.id",
        "Agent.photo",
        "Agent.name",
        "Agent.office_id",
        "Agent.team_id",
        "Agent.email"
    ]
  end

  def searchable_columns
    # Declare strings in this format: ModelName.column_name
    @searchable_columns ||= [
        "Agent.id",
        "Agent.photo",
        "Agent.name",
        "Agent.office_id",
        "Agent.team_id",
        "Agent.email"
    ]
  end

  private

  def data
    records.map do |record|
      [
        record.id,
        (record.photo ? image_tag((eval record.photo)["content_url"], size: "50x50") : image_tag("avatars/male.png")),
        record.name,
        select_tag("office_#{record.id}", options_from_collection_for_select(Office.all, "id", "name",(record.office.present? ? record.office.id : "")), include_blank: true, prompt: "Select Office", :class => "select2"),
        select_tag("team_#{record.id}", options_from_collection_for_select(Team.all, "id", "name",(record.team.present? ? record.team.id : "")), include_blank: true, prompt: "Select Team", :class => "select2"),
        record.email,
        actions(record)
      ]
    end
  end

  def get_raw_records
    Agent.all
  end

  # ==== Insert 'presenter'-like methods below if necessary
end
