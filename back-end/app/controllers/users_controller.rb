class UsersController < ApplicationController
  skip_before_action :authenticate_user, :only => [:new, :create]

  def new
    # @user = User.new
    # render :new
    respond_with user.all
  end

  def show
    user = User.find(params[:id])
    jwt = Auth.issue({user_id: user.id})
    render json: {jwt: jwt}
  end

  def create
    byebug
    respond_with :api, :v1, user.create(user_params)
    #
    # user = User.new(user_params)
    # if user.save
    #   jwt = Auth.issue({user_id: user.id})
    #   render json: {jwt: jwt}
    # else
    #   render json: {error: 'user not unique'}
    # end
  end

  def index
    @users = User.all
    render json: @users
  end

  # def destroy
  #   respond_with User.destroy(params[:id])
  # end

  # def update
  #   user = User.find(params["id"]) user.update_attributes(user_params)
  #   respond_with user, json: user
  # end

  private
    def user_params
      params.require(:user).permit(:email, :password)
    end

end

# class Api::V1::usersController < Api::V1::BaseController
#   def index
#     respond_with user.all
#   end
#
#   def create
#     respond_with :api, :v1, user.create(user_params)
#   end
#
#   def destroy
#     respond_with user.destroy(params[:id])
#   end
#
#   def update
#     user = user.find(params["id"]) user.update_attributes(user_params)
#     respond_with user, json: user
#   end
#
#   private
#   def user_params
#     params.require(:user).permit(:id, :name, :description)
#   end
#
# end
