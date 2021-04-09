class DeckboxSerializer < ActiveModel::Serializer
  attributes :id, :image, :card_name, :user_id, :quantity, :deck_name
end
