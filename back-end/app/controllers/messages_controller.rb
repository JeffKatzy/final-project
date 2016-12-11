class MessagesController < ApplicationController

  def create
    message = Message.new(message_params)
    if message.save
      # render json: {message: "i made it"}
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


end
