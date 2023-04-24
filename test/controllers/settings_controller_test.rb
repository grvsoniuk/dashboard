require 'test_helper'

class SettingsControllerTest < ActionDispatch::IntegrationTest
  test "should get change_password" do
    get settings_change_password_url
    assert_response :success
  end

end
