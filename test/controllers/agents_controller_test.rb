require 'test_helper'

class AgentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get agents_index_url
    assert_response :success
  end

  test "should get agents_mapping" do
    get agents_agents_mapping_url
    assert_response :success
  end

end
