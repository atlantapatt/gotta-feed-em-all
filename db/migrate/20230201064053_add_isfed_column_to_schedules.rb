class AddIsfedColumnToSchedules < ActiveRecord::Migration[6.1]
  def change
    add_column :schedules, :isfed, :boolean
  end
end
