class User < ApplicationRecord
    belongs_to :family

    has_secure_password
    validates :username, presence: true, uniqueness: true
end
