class SongsController < ApplicationController

  def create
    song = Song.new(song_params)
    user = User.find(Auth.decode(params['token'])["user_id"])
    song.playlists << user.playlist
    if song.save
      jwt = {playlist: user.playlist.songs}
      render json: {jwt: jwt}
    else
      render json: {error: 'song does not exist'}
    end
  end

  def destroy
    user = User.find(Auth.decode(params['token'])["user_id"])
    user.playlist.songs.delete(Song.find(params[:id]))
    render json: {playlist: user.playlist.songs}
  end

  private
    def song_params
      params.require(:song).permit(:name, :artist, :album, :spotify_id, :duration, :id)
    end

end
