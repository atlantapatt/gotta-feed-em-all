class FixTypeColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :types, :type, :pet_type
  end
end
