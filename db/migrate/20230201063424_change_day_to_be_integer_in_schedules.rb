class ChangeDayToBeIntegerInSchedules < ActiveRecord::Migration[6.1]
  def change
    change_column :schedules, :day, :integer
  end
end
