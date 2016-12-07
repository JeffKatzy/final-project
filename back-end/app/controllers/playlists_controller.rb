class PlaylistsController < ApplicationController
  skip_before_action :authenticate_user, :only => [:show]

  def show
    user = User.find(params[:id])
    render json: {playlist: user.playlist.songs}
  end

end
