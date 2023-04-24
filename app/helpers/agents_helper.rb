module AgentsHelper
  def actions(record)
    link_to("Update", "javascript:;", :class => "btn btn-info btn-xs", :id => "#{record.id}", "onclick" => "update_agent(this);")+" "+
        (can?(:manage, User) ? add_remove_button(record) : " ")
        # add_remove_button(record)
  end

  def add_remove_button(record)
    user = User.where(email: record.email)
    if user.present?
      remove_user_button(record)
    else
      add_user_button(record)
    end
  end

  def remove_user_button(record)
    link_to("Remove User", Rails.application.routes.url_helpers.agent_remove_as_user_url(record.id, only_path: true), data: { confirm: "Are you sure?" }, remote: true, method: :post, class: "btn btn-danger btn-xs", id: "remove_user_#{record.id}")
  end

  def add_user_button(record)
    link_to("Add User", Rails.application.routes.url_helpers.agent_add_as_user_url(record.id, only_path: true), data: { confirm: "Are you sure?" }, remote: true, method: :post, class: "btn btn-success btn-xs", id: "add_user_#{record.id}")
  end
end
