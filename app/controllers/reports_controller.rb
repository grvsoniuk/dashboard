class ReportsController < ApplicationController
  include ReportsHelper
  layout :false

  def index
  	@agents = params[:agents]
  	@tickets = report(params[:agents], params[:type], params[:startDate], params[:endDate])
  	@title = params[:type].titlecase
  end

end
