class ApplicationController < ActionController::API
  before_action :authenticate_user

  def authenticate_user
    render json: {error: "Unauthorized User"} unless signed_in?
  end

  def signed_in?
    !!current_user
  end

  def current_user
    User.find(Auth.decode(params['token'])["user_id"]) if params['token']
  end

end
