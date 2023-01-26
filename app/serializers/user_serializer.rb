class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :family_id

  has_many :pets, serializer: PetSerializer
end
