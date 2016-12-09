class GroupsController < ApplicationController
  skip_before_action :authenticate_user, :only => [:show]

    def index
      groups = current_user.group.map do |group|
        {id: group.id, name: group.name}
      end
      render json: {groups: groups}
    end

    def show
      if current_user.groups.include?(current_group)
        render json: {playlist: group.songs, chat: group.messages}
      end
    end

    def new
      invitees = invite_params[:email].map(email => User.find_by(email: email))
      group = Group.new()

      if invitee == nil
        render json: {error: "Sorry, this user is lame and doesn't have a DayJams account."}
      else
        current_user.groups << group
        invitee.groups << group
        render json: {playlist: group.songs, chat: group.messages}
      end
    end

    def destroy
      if current_user.groups.include?(current_group)
        current_group.songs.clear
      end
      render json: {playlist: current_group.songs, chat: current_group.messages}
    end

    private
    def invite_params
      params.require(:invite).permit(:email)
    end

    def group_params
      params.require(:group).permit(:id, :user_id)
    end

    def current_user
      User.find(Auth.decode(params['token'])["user_id"])
    end

    def current_group
      Group.find(group_params[:id])
    end

  end
