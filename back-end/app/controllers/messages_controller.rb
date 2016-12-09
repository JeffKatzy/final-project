class MessagesController > ApplicationController

  def new

  end

  def create

  end

  def destroy

  end

  private
    def message_params
      params.require(:message).permit(:group_id, :user_id, :text)
    end

end
