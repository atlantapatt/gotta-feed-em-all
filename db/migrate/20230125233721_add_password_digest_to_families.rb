class AddPasswordDigestToFamilies < ActiveRecord::Migration[6.1]
  def change
    add_column :families, :password_digest, :string
  end
end
