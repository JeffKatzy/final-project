require 'spotify_api'

class SongsController < ApplicationController

  def create
    song = Song.new(song_params)
    current_group.songs << song
    if song.save
      render json: {playlist: current_group.songs}
    else
      render json: {error: 'song does not exist'}
    end
  end

  def destroy
    current_group.songs.delete(Song.find(params[:id]))
    render json: {playlist: current_group.songs}
  end

  def search
    result = SpotifyAPI.search(song_params[:search_term])
    render json: {songResults: result}
  end

  private
    def song_params
      params.require(:song).permit(:name, :artist, :album, :spotify_id, :search_term)
    end

    def group_params
      params.require(:user).permit(:group)
    end

    def current_group
      Group.find(group_params[:group])
    end

    def current_user
      User.find(Auth.decode(params['token'])["user_id"])
    end


end
