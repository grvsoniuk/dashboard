module Org
  def self.get_all_offices
    Office.all
  end

  def self.get_all_teams
    Team.all
  end

  def self.get_all_agent_from_offices(offices=Org.get_all_offices)
    offices = Org.get_all_offices if offices.blank?
    agents = []

    offices.each do |office|
      agents << office.agents
    end

    agents.flatten.compact.uniq
  end

  def self.get_all_agent_from_teams(teams=Org.get_all_teams)
    teams = Org.get_all_teams if teams.blank?
    agents = []

    get_all_offices.each do |office|
      teams.each do |team|
        agents << team.agents
      end
    end

    agents.flatten.compact.uniq
  end

  def self.get_agents_from_offices_and_teams(offices=Org.get_all_offices, teams=Org.get_all_teams)
    agents_from_offices = Org.get_all_agent_from_offices(offices)
    agents_from_teams = Org.get_all_agent_from_teams(teams)
    agents_from_offices & agents_from_teams
  end
end