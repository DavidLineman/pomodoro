class PomodorosController < ApplicationController
  before_action :authenticate_user!

  def index
    @pomodoros = current_user.pomodoros
  end

  def create
    current_user.pomodoros.create!
    redirect_to pomodoros_path
  end

  def show

  end

end
