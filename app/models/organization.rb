class Organization < ApplicationRecord
  has_many :agents, :class_name => "Agent", :foreign_key => "organization_id"
  has_many :Tickets, :class_name => "Ticket", :foreign_key => "organization_id"
end
