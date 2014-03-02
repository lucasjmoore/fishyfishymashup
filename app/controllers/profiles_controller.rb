class ProfilesController < ApplicationController
  def show
  	@user = User.find(params[:id])
  	if @user
  		#@fish = @user.fish.all
  		render action: :show
  	end
  end

  def profile_params
      params.require(:user).permit(:user_id, :profile_name, :user)
  end
end
