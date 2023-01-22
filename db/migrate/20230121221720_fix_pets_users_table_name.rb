class FixPetsUsersTableName < ActiveRecord::Migration[6.1]
  def change
    rename_table :pet_users, :pets_users
  end
end
