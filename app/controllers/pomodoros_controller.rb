class PomodorosController < ApplicationController
  before_action :authenticate_user!

  def index
    @pomodoros = current_user.pomodoros
  end

  def create
    @pomodoro = current_user.pomodoros.build(duration_in_minutes: 1, started_at: Time.now)
    @pomodoro.save!
    redirect_to pomodoro_path(@pomodoro)
  end

  def show
    @pomodoro = current_user.pomodoros.find(params[:id])
  end

  def finish
    @pomodoro = current_user.pomodoros.find(params[:id])
    @pomodoro.finish!
    redirect_to pomodoros_path
  end

  private 

  def pomodoro_params
    params.require(:user)
  end


end
