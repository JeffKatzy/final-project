class MessagesController < ApplicationController
  helper_method :render_chat

  def create
    message = Message.new(message_params)
    if message.save
      render json: {chat: render_chat(message_params[:group_id])}
    else
      render json: {error: "Not good"}
    end
  end

  def destroy
    Message.find(params[:id]).destroy

    render json: {chat: render_chat(message_params[:group_id])}
  end

  private
    def message_params
      params.require(:message).permit(:group_id, :user_id, :text)
    end

    def render_chat(group)
      Group.find(group).each do |message|
        {id: message.id, user_id: message.user_id, text: message.text, sender: User.find(message.user_id).name}
      end
    end

end
