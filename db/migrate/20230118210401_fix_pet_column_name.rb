class FixPetColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :pets, :type_id, :pet_type_id
  end
end
