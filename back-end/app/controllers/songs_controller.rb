require 'spotify_api'

class SongsController < ApplicationController

  def create
    song = Song.new(song_params)
    user_id = Auth.decode(params['token'])["user_id"]
    playlist = Playlist.find(user_id)
    song.playlists << playlist
    if song.save
      render json: {playlist: playlist.songs}
    else
      render json: {error: 'song does not exist'}
    end
  end

  def destroy
    user_id = Auth.decode(params['token'])["user_id"]
    playlist = Playlist.find(user_id)
    playlist.songs.delete(Song.find(params[:id]))
    render json: {playlist: playlist.songs}
  end

  def search
    SpotifyAPI.search(song_params[:search_term])
    render json: {songResults: response.tracks.items}
  end

  private
    def song_params
      params.require(:song).permit(:name, :artist, :album, :spotify_id, :duration, :id, :search_term)
    end

end
