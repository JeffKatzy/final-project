class UsersController < ApplicationController
  skip_before_action :authenticate_user, :only => [:new, :create, :show]

  def show
    user = User.find_by(email: user_params[:email])
    if user && user.authenticate(user_params[:password])
      jwt = Auth.issue({user_id: user.id})
      groups = user.groups.map do |group|
        {group_id: group.id, group_name: group.name}
      end
      render json: {
        jwt: jwt,
        user_id: user.id,
        groups: groups,
        group: user.groups.first.id,
        playlist: user.groups.first.songs,
        chat: render_chat(user.groups.first.id)
      }
    else
      render json: {error: 'Please log in with a valid account'}
    end
  end

  def create
    user = User.new(user_params)
    if user.save
      group = Group.create(name: user_params[:name])
      group.songs << Song.new(
        name: "One Night",
        artist: "Lil Yachty",
        album: "Lil Boat",
        spotify_id: "40yJGQyEaBbIkXpwMFkXip",
        group_id: group.id
        )
      user.groups << group
      groups = user.groups.map do |group|
        {group_id: group.id, group_name: group.name}
      end
      jwt = Auth.issue({user_id: user.id})
      user.save
      render json: {
        jwt: jwt,
        user_id:
        user.id,
        group: user.groups.first.id,
        playlist: user.groups.first.songs,
        chat: user.groups.first.messages,
        groups: groups
      }
    else
      render json: {error: 'Username is not unique. Please choose another.'}
    end
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :password)
    end

end
