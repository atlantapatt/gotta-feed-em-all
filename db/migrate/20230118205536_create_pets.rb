class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :family_id
      t.integer :pet_type_id

      t.timestamps
    end
  end
end
