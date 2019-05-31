class PomodorosController < ApplicationController
  before_action :authenticate_user!

  def index
    @pomodoros = current_user.pomodoros
  end

  def create
    current_user.pomodoros.create!
    redirect_to pomodoro_path(current_user)
  end

  def show
    @pomodoros = current_user.pomodoros
  end


  private 

  def pomodoro_params
    params.require(:user)
  end

end
