class Pet < ApplicationRecord
    has_one :type
    has_many :pet_users
end
