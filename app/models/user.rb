class User < ApplicationRecord
    # belongs_to :family
    has_many :pet_users
    has_many :schedules
    has_many :pets, through: :schedules
    

    has_secure_password
    validates :username, presence: true, uniqueness: true
end
