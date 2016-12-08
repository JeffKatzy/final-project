class GroupsController > ApplicationController

  def new
    
  end

  def create

  end

  def destroy

  end

  private
    def method_name
      params.require(:group).permit(:user_id, :text)
    end

end
