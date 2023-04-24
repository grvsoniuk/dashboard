class UsersController < ApplicationController
  layout "main"
  load_and_authorize_resource except: [:update_refresh_interval]

  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user = User.find(params['user_id'])
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  
  def change_role
    @user = User.find(params['user_id'])
    @user.update(role: params['role']) if @user.present?
  end

  def update_refresh_interval
    @user = User.find(params['user_id'])
    @user.update(refresh_interval: params[:refresh_interval]) if @user.present?
    head :ok
  end
end
