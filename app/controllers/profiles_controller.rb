class ProfilesController < ApplicationController
  def show
  	@user = User.find_by_profile_name(params[:id])
  	if @user
  		@fish = @user.fish.all
  		render action: :show
  	end
  end

  def profile_params
      params.require(:user).permit(:user_id, :profile_name, :user)
  end
end
