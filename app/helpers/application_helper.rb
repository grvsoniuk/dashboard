module ApplicationHelper
  def  left_nav_selection(controller, action='index')
    "open" if params[:controller] == controller && params[:action] == action
  end
end
