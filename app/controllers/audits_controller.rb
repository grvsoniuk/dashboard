class AuditsController < ApplicationController
  layout "main"
  before_action :set_audit, only: [:show, :edit, :update, :destroy]
  load_and_authorize_resource

  # GET /audits
  # GET /audits.json
  def index
    @audits = Audit.all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_audit
      @audit = Audit.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def audit_params
      params.require(:audit).permit(:auditable_id, :auditable_type, :associated_id, :associated_type, :user_id, :user_type, :username, :action, :audited_changes, :version, :comment, :remote_address, :request_uuid, :created_at)
    end
end
