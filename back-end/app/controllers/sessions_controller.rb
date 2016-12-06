# class SessionsController < ApplicationController
#   skip_before_action :authenticate_user, :only => [:new, :create]
#
#   def create
#     user = User.find_by(email: auth_params[:email])
#     if user.authenticate(auth_params[:password])
#       jwt = Auth.issue({user: user.id})
#       render json: {jwt: jwt}
#     else
#       render json: {error: 'user not unique'}
#     end
#   end
#
#   private
#     def auth_params
#       params.require(:user).permit(:email, :password)
#     end
#
# end
