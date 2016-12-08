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
      user.playlist_id = Playlist.create(user_id: user.id).id
      user.save
      render json: {jwt: jwt, userId: user.id}
    else
      render json: {error: 'user not unique'}
    end
  end

  def login
    user = User.find_by(email: user_params[:email])
    if user.authenticate(user_params[:password])
      jwt = Auth.issue({user_id: user.id})
      render json: {jwt: jwt, userId: user.id}
    else
      render json: {error: 'user not unique'}
    end
  end

  def index
    users = User.all
    render json: {users: users}
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :password)
    end

end
