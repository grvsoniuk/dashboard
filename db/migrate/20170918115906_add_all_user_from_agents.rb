class AddAllUserFromAgents < ActiveRecord::Migration[5.0]
  def up
    Agent.all.each do |agent|
      if agent.email.ends_with? User::APPD_EMAIL_DOMAIN
      	User.add_as_user(agent.email)
      end
    end
  end

  def down
  end
end
