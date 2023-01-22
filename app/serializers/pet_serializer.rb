class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :pet_type_id

  has_many :users
end
