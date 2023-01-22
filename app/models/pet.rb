class Pet < ApplicationRecord
    has_one :type
    has_many :pet_users
    has_many :users, through: :pet_users
end
