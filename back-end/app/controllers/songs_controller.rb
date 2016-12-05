class SongsController < ApplicationController

  def create
    byebug
    song = Song.new(song_params)
    if song.save
      jwt = {song_id: song.id}
      render json: {jwt: jwt}
    else
      render json: {error: 'song does not exist'}
    end
  end

  private
    def song_params
      params.require(:song).permit(:name, :artist, :album, :spotify_id, duration:)
    end

end
