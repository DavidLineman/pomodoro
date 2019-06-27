class Pomodoro < ApplicationRecord
  belongs_to :user

  def finish!
    update(completed: true)
  end
end
