# class PlaylistsController < ApplicationController
#   skip_before_action :authenticate_user, :only => [:show]
#
#   def show
#     user = User.find(params[:id])
#     playlist = Playlist.find_by(user_id: params[:id])
#     playlists = user.playlists.map do |playlist|
#       {id: playlist.id, name: User.find(playlist.user_id).name}
#     end
#     render json: {playlist: playlist.songs, playlists: playlists}
#   end
#
#   def invite_user
#     host_id = Auth.decode(params['token'])["user_id"]
#     invitee = User.find_by(email: invite_params[:email])
#     playlist = Playlist.find_by(user_id: host_id)
#
#     if invitee == nil
#       render json: {error: "Sorry, this user is lame and doesn't have a DayJams account."}
#     elsif invitee.playlists.include?(playlist.id)
#       render json: {error: "You've already shared your playlist with this user"}
#     else
#       invitee.playlists << playlist
#       render json: {playlist: playlist.songs}
#     end
#   end
#
#   def destroy
#     user_id = Auth.decode(params['token'])["user_id"]
#     playlist = Playlist.find(user_id)
#     playlist.songs.clear
#     render json: {playlist: playlist.songs}
#   end
#
#   private
#   def invite_params
#     params.require(:invite).permit(:email)
#   end
#
# end
