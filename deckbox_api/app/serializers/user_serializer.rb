class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :deckboxes
end
