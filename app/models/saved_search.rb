class SavedSearch < ApplicationRecord
	audited
	validates :name, presence: true
	validates :name, uniqueness: { scope: :user_id,
    message: "should be unique per user." }
	belongs_to :user, :class_name => "User", :foreign_key => "user_id"
end
