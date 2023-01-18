class PetUser < ApplicationRecord
    has_many :pets
    has_many :users
end
