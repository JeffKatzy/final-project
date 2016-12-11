class GroupsController < ApplicationController

    def index
      groups = current_user.group.map do |group|
        {id: group.id, name: group.name}
      end
      render json: {groups: groups}
    end

    def show
      groups = current_user.groups.map do |group|
        {group_id: group.id, group_name: group.name}
      end
      if current_user.groups.include?(current_group)
        render json: {
          groups: groups,
          playlist: current_group.songs,
          chat: render_chat(current_group.id),
          group: params[:id]
        }
      end
    end

    def create
      group = Group.create(name: group_params[:name])
      group.users << current_user
      invitees = group_params[:users].split(", ")
      groups = current_user.groups.map do |group|
        {group_id: group.id, group_name: group.name}
      end
      if invitees.each{|name| group.users << User.find_by(name: name)}
        render json: {
          playlist: group.songs,
          chat: render_chat(current_group.id),
          group: group.id, groups: groups
        }
      else
        render json: {error: "Please invite current users by username."}
      end
    end

    def destroy
      if current_user.groups.include?(current_group)
        current_group.songs.clear
      end
      render json: {
        playlist: current_group.songs,
        chat: render_chat(current_group.id)
      }
    end

    private
    def group_params
      params.require(:group).permit(:id, :user_id, :users, :name)
    end

    def current_user
      User.find(Auth.decode(params['token'])["user_id"])
    end

    def current_group
      Group.find(group_params[:id])
    end

  end
