class SongsController < ApplicationController

  def create
    byebug
    song = Song.new(song_params)
    user = User.find(Auth.decode(params['token'])["user_id"])
    if song.save
      jwt = {song_id: song.id}
      user.songs << song
      render json: {jwt: jwt}
    else
      render json: {error: 'song does not exist'}
    end
  end

  private
    def song_params
      params.require(:song).permit(:name, :artist, :album, :spotify_id, :duration)
    end

end
