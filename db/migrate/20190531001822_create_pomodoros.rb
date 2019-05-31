class CreatePomodoros < ActiveRecord::Migration[5.2]
  def change
    create_table :pomodoros do |t|
      t.datetime :started_at
      t.string :caption
      t.integer :duration_in_minutes
      t.boolean :completed
      t.references :user

      t.timestamps
    end
  end
end
