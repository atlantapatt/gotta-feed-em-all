class ChangePetsUsersTableNameBack < ActiveRecord::Migration[6.1]
  def change
    rename_table :pets_users, :pet_users

  end
end
