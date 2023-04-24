require 'test_helper'

class AuditsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @audit = audits(:one)
  end

  test "should get index" do
    get audits_url
    assert_response :success
  end

  test "should get new" do
    get new_audit_url
    assert_response :success
  end

  test "should create audit" do
    assert_difference('Audit.count') do
      post audits_url, params: { audit: { action: @audit.action, associated_id: @audit.associated_id, associated_type: @audit.associated_type, auditable_id: @audit.auditable_id, auditable_type: @audit.auditable_type, audited_changes: @audit.audited_changes, comment: @audit.comment, created_at: @audit.created_at, remote_address: @audit.remote_address, request_uuid: @audit.request_uuid, user_id: @audit.user_id, user_type: @audit.user_type, username: @audit.username, version: @audit.version } }
    end

    assert_redirected_to audit_url(Audit.last)
  end

  test "should show audit" do
    get audit_url(@audit)
    assert_response :success
  end

  test "should get edit" do
    get edit_audit_url(@audit)
    assert_response :success
  end

  test "should update audit" do
    patch audit_url(@audit), params: { audit: { action: @audit.action, associated_id: @audit.associated_id, associated_type: @audit.associated_type, auditable_id: @audit.auditable_id, auditable_type: @audit.auditable_type, audited_changes: @audit.audited_changes, comment: @audit.comment, created_at: @audit.created_at, remote_address: @audit.remote_address, request_uuid: @audit.request_uuid, user_id: @audit.user_id, user_type: @audit.user_type, username: @audit.username, version: @audit.version } }
    assert_redirected_to audit_url(@audit)
  end

  test "should destroy audit" do
    assert_difference('Audit.count', -1) do
      delete audit_url(@audit)
    end

    assert_redirected_to audits_url
  end
end
