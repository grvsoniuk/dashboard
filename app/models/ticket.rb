class Ticket < ApplicationRecord

  self.inheritance_column = 'ticket_type'
  belongs_to :requester, class_name: "Agent", foreign_key: :requester_id
  belongs_to :submitter, class_name: "Agent", foreign_key: :submitter_id
  belongs_to :assignee, class_name: "Agent", foreign_key: :assignee_id
  belongs_to :organization, class_name: "Organization", foreign_key: :organization_id

  before_save :update_weight

  PRIORITY_URGENT = "urgent"
  PRIORITY_HIGH = "high"
  PRIORITY_NORMAL = "normal"
  PRIORITY_LOW = "low"
  PRIORITIES = [PRIORITY_URGENT, PRIORITY_HIGH, PRIORITY_NORMAL, PRIORITY_LOW]
  PRIORITY_HEAT = {
    PRIORITY_URGENT => 10, 
    PRIORITY_HIGH => 7, 
    PRIORITY_NORMAL => 5, 
    PRIORITY_LOW => 2 
  }

  STATUS_NEW = "new"
  STATUS_OPEN = "open"
  STATUS_PENDING = "pending"
  STATUS_ON_HOLD = "hold"
  STATUS_CLOSED = "closed"
  STATUS_SOLVED = "solved"
  STATUS = [STATUS_NEW, STATUS_OPEN, STATUS_PENDING, STATUS_ON_HOLD, STATUS_CLOSED, STATUS_SOLVED]
  STATUS_NEED_ATTENTION = STATUS-[STATUS_CLOSED, STATUS_SOLVED]
  STATUS_HEAT = {
    STATUS_NEW => 10, 
    STATUS_OPEN => 9, 
    STATUS_PENDING => 1.5, 
    STATUS_ON_HOLD => 0, 
    STATUS_CLOSED => 0, 
    STATUS_SOLVED => 0
  }

  SUB_COMPONENT = 261533
  COMPONENT = 20234148

  def field(code)
    value = ""
    props = eval(fields)
    props.each do |field|
      if field["id"] == code
        value = field["value"]
      end
    end
    value
  end

  def link
    url.split(".json").first
  end

  def self.tickets_by_priorities(tickets)
    priorities = {}
    tickets.each do |ticket|
      unless ticket.priority.blank?
        priorities[ticket.priority]=[] if priorities[ticket.priority].nil?
        priorities[ticket.priority] << ticket
      end
    end
    priorities
  end

  def self.tickets_by_statuses(tickets)
    statuses = {}
    unless tickets.blank?
      tickets.each do |ticket|
        statuses[ticket.status]=[] if statuses[ticket.status].nil?
        statuses[ticket.status] << ticket
      end
    end
    statuses
  end

  def self.tickets_by_assignee(agent)
    Ticket.where(:assignee_id => agent.id)
  end

  def self.tickets_by_submitter(agent)
    Ticket.where(:submitter_id => agent.id)
  end

  def self.tickets_by_requester(agent)
    Ticket.where(:requester_id => agent.id)
  end

  def self.top_10_long_running
    Ticket.where("status=?", STATUS_OPEN).order("created_at").limit(5)
  end

  def self.tickets_by_offices(offices=Org.get_all_offices, status=STATUS_NEED_ATTENTION)
    agents = Org.get_all_agent_from_offices(offices)
    Ticket.where(status: status, assignee_id: agents.flatten)
  end

  def self.tickets_by_teams(teams=Org.get_all_teams, status=STATUS_NEED_ATTENTION)
    agents = Org.get_all_agent_from_teams(teams)
    Ticket.where(status: status, assignee_id: agents.flatten)
  end

  def self.tickets_by_offices_and_teams(offices=Org.get_all_offices, teams=Org.get_all_teams, priorities=nil, statuses=nil)
    statuses = Ticket::STATUS_NEED_ATTENTION if statuses.blank?
    priorities = Ticket::PRIORITIES if priorities.blank?
    agents = Org.get_agents_from_offices_and_teams(offices, teams)
    Ticket.where(status: statuses, assignee_id: agents.flatten, priority: priorities)
  end

  def self.update_all_tickets_weight
    Ticket.record_timestamps=false
    Ticket.all.each do |ticket|
      ticket.weight = (ticket.priority.blank? || ticket.status.blank? || ((ticket.status == Ticket::STATUS_PENDING or ticket.status == Ticket::STATUS_ON_HOLD) and ticket.updated_at <= 1.week.ago)) ? 0 : Ticket::PRIORITY_HEAT[ticket.priority]*Ticket::STATUS_HEAT[ticket.status]
      ticket.save
    end
  end

  private
  def update_weight
    Ticket.record_timestamps=false
    self.weight = (self.priority.blank? || self.status.blank? || ((self.status == Ticket::STATUS_PENDING or self.status == Ticket::STATUS_ON_HOLD) and self.updated_at <= 1.week.ago)) ? 0 : Ticket::PRIORITY_HEAT[self.priority]*Ticket::STATUS_HEAT[self.status]
  end

end
