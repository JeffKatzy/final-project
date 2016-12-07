class PlaylistsController < ApplicationController
  skip_before_action :authenticate_user, :only => [:show]

  def show
    playlist = Playlist.find_by(user_id: params[:id])
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
    end
  end

  private
  def invite_params
    params.require(:invite).permit(:email)
  end

end
