class User < ApplicationRecord
  audited
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  validates :email, format: { with: /.*@appdynamics\.com/,
    message: "should belong to appdynamics.com." }
  
  has_many :saved_searches, -> { order('name ASC') }, :class_name => "SavedSearch", :foreign_key => "user_id", :dependent => :destroy
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  after_commit :create_default_saved_search, on: :create

  ROLES = {:guest => 0 , :moderator => 1, :admin => 2}
  BLANK_QUERY = {:offices => nil, :teams => nil, :priorities => nil, :statuses => nil}
  REFRESH_INTERVALS = {0 => "Auto Refresh Off",
                       15 => "Every 15 seconds",
                       30 => "Every 30 seconds",
                       45 => "Every 45 seconds",
                       60 => "Every 1 Minute",
                       120 => "Every 2 Minutes",
                       300 => "Every 5 Minute",
                       600 => "Every 10 Minute",
                       900 => "Every 15 Minute",
                       1800 => "Every 30 Minute"}
  APPD_EMAIL_DOMAIN = "@appdynamics.com"  

  def admin?
    role == User::ROLES[:admin]
  end

  def moderator?
    role == User::ROLES[:moderator]
  end

  def guest?
    role == User::ROLES[:guest]
  end

  def role?
    User::ROLES.key(role)
  end

  def default_saved_search
    saved_searches.where(is_default: true).first
  end

  def create_default_saved_search
  	saved_searches.update_all(default: false) if saved_searches.present?
    SavedSearch.create({name: "Default", user_id: self.id, query: BLANK_QUERY.to_yaml})
  end

  def self.add_as_user(emailAddress)
    puts "emailAddress"
    user = nil
    user = User.find_by email: emailAddress
    if user.blank?
      puts "Creating..."
      user = User.create!(email: emailAddress, password: "changeit")
    end
    user
  end
end
