class SettingsController < ApplicationController
  layout "main"

  def change_password
  end

  def update_password
  	begin
  	  @user = User.find(current_user.id)
  	  @user.update_attributes!(user_params)
  	  gflash :success => "Password changed!"
  	  redirect_to :settings_change_password
  	rescue ActiveRecord::RecordInvalid => e
  	  gflash :error => e.message
  	  redirect_to :settings_change_password
  	end
  end

  private

  def user_params
    params.require(:user).permit(:password, :password_confirmation)
  end
end
