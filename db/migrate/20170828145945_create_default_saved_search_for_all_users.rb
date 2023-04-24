class CreateDefaultSavedSearchForAllUsers < ActiveRecord::Migration[5.0]
  def up
    User.all.each do |user|
    	SavedSearch.create({name: "Default", user_id: user.id, query: User::BLANK_QUERY.to_yaml})
    end
  end

  def down
    SavedSearch.destroy_all
  end
end
