class Family < ApplicationRecord
    has_many :users
    has_many :pets

    has_secure_password
end
