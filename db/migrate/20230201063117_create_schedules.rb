class CreateSchedules < ActiveRecord::Migration[6.1]
  def change
    create_table :schedules do |t|
      t.string :day
      t.integer :AMorPM
      t.integer :pet_id
      t.string :user

      t.timestamps
    end
  end
end
