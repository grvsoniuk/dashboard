class Agent < ApplicationRecord
  audited
  has_many :requests, :class_name => "Ticket", :foreign_key => "requester_id"
  has_many :submits, :class_name => "Ticket", :foreign_key => "submitter_id"
  has_many :assignments, :class_name => "Ticket", :foreign_key => "assignee_id"
  belongs_to :organization, :class_name => "Organization", :foreign_key => "organization_id"
  belongs_to :team
  belongs_to :office

  AGENT_TYPES = ["admin", "agent"]

  def self.agents_with_tickets
    agents = []

    for agent in Agent.agents_by_region
      support_engg = {}
      support_engg[:id] = agent.id
      support_engg[:agent_name] = agent.name
      support_engg[:total_tickets] = agent.assignments.count
      support_engg[:urgent] = agent.assignments.where("priority=?", "urgent").count
      support_engg[:high] = agent.assignments.where("priority=?", "high").count
      support_engg[:normal] = agent.assignments.where("priority=?", "normal").count
      support_engg[:on_hold] = agent.assignments.where("status=?", "on-hold").count
      agents << support_engg
    end
    agents
  end

  def self.agents_by_offices_and_teams(offices=Org.get_all_offices, teams=Org.get_all_teams, priorities=nil, statuses=nil)
    agents_ids = Org.get_agents_from_offices_and_teams(offices, teams)
    agents = nil
    if priorities.blank? and statuses.blank?
      agents = Agent.where(id: agents_ids.flatten)
    else
      agents = Agent.joins(:assignments).where(id: agents_ids.flatten)
      agents = agents.where("tickets.priority in (?)", priorities) unless priorities.blank?
      agents = agents.where("tickets.status in (?)", statuses) unless statuses.blank?
    end
    agents.distinct
  end

  def urgent_tickets(status=Ticket::STATUS)
    assignments.where(status: status, priority: Ticket::PRIORITY_URGENT)
  end

  def high_tickets(status=Ticket::STATUS)
    assignments.where(status: status, priority: Ticket::PRIORITY_HIGH)
  end

  def normal_tickets(status=Ticket::STATUS)
    assignments.where(status: status, priority: Ticket::PRIORITY_NORMAL)
  end

  def low_tickets(status=Ticket::STATUS)
    assignments.where(status: status, priority: Ticket::PRIORITY_LOW)
  end

  def new_tickets
    assignments.where(status: Ticket::STATUS_NEW)
  end

  def open_tickets
    assignments.where(status: Ticket::STATUS_OPEN)
  end

  def pending_tickets
    assignments.where(status: Ticket::STATUS_PENDING)
  end

  def on_hold_tickets
    assignments.where(status: Ticket::STATUS_ON_HOLD)
  end

  def tickets(status=nil, priority=nil)
    if status.blank? and priority.blank?
      assignments
    elsif status.blank? and priority.present?
      assignments.where(priority: priority)
    elsif status.present? and priority.blank?
      assignments.where(status: status)
    else
      assignments.where(status: status, priority: priority)
    end
  end

  def tickets_weight(status=nil, priority=nil)
    tickets.sum(:weight)
  end

  def add_as_user
    user = User.find_by email: self.email
    if user.blank?
      user = User.new(:email => self.email, :password => 'changeit', :password_confirmation => 'changeit')
      user.save
    end
  end

  def remove_as_user
    user = User.find_by! email: self.email
    user.destroy if user.present?
  end
end