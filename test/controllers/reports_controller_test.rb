require 'test_helper'

class ReportsControllerTest < ActionDispatch::IntegrationTest
  test "should get week" do
    get reports_week_url
    assert_response :success
  end

  test "should get month" do
    get reports_month_url
    assert_response :success
  end

end
