module DashboardHelper
  include Org
  def agents_ui_attributes
    [
        "id",
        "photo",
        "name",
        "office_id",
        "team_id",
        "email",
        "actions"
    ]
  end
end