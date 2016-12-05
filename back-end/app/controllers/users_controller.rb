class UsersController < ApplicationController
  skip_before_action :authenticate_user, :only => [:new, :create, :login]

  def show
    user = User.find(params[:id])
    jwt = Auth.issue({user_id: user.id})
    render json: {jwt: jwt}
  end

  def create
    user = User.new(user_params)
    if user.save
      jwt = Auth.issue({user_id: user.id})
      render json: {jwt: jwt}
    else
      render json: {error: 'user not unique'}
    end
  end

  def login
    user = User.find_by(email: user_params[:email])
    if user.authenticate(user_params[:password])
      jwt = Auth.issue({user_id: user.id})
      render json: {jwt: jwt}
    else
      render json: {error: 'user not unique'}
    end
  end

  def index
    users = User.all
    render json: {users: users}
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
