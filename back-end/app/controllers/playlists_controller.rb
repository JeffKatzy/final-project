class PlaylistsController < ApplicationController
  skip_before_action :authenticate_user, :only => [:show]

  def show
    user = User.find(params[:id])
    playlist = Playlist.find_by(user_id: params[:id])
    user.playlists.each_with_object({}) do |playlist, hash|
      
    end
    # playlists = User.find(params[:id]).playlists
    render json: {playlist: playlist.songs}
  end

  def invite_user
    host = Auth.decode(params['token'])["user_id"]
    invitee = User.find_by(email: invite_params[:email])
    playlist = Playlist.find_by(user_id: host.id)

    if invitee == nil
      render json: {error: "Sorry, this user is lame and doesn't have a DayJams account."}
    else
      invitee.playlists << playlist
      render json: {playlist: playlist.songs}
    end
  end

  def destroy
    user_id = Auth.decode(params['token'])["user_id"]
    playlist = Playlist.find(user_id)
    playlist.songs.clear
    render json: {playlist: playlist.songs}
  end

  private
  def invite_params
    params.require(:invite).permit(:email)
  end

end
