class ChatsController > ApplicationController

  def new
    @user = User.find_by(name: 'Jay-Z')
  end

  def create

  end

  def destroy

  end

  private
  def method_name
    params.require(:chat).permit()
  end

end
