class ApplicationController < ActionController::API
  before_action :authenticate_user

  def authenticate_user
    render json: {error: "Please log in with a valid account"} unless signed_in?
  end

  def signed_in?
    !!current_user
  end

  def current_user
    User.find(Auth.decode(params['token'])["user_id"]) if params['token']
  end

  def render_chat(group)
    Group.find(group).messages.map do |message|
      {id: message.id,
        user_id: message.user_id,
        text: message.text,
        sender: User.find(message.user_id).name
      }
    end
  end

end
