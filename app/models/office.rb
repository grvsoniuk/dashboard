class Office < ApplicationRecord
	audited
	validates_presence_of :name, :message => "can't be blank"
	has_many :agents
end
