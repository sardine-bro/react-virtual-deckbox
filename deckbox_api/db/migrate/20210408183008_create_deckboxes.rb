class CreateDeckboxes < ActiveRecord::Migration[6.1]
  def change
    create_table :deckboxes do |t|
      t.string :card_name
      t.integer :quantity
      t.string :image
      t.string :deck_name
      t.integer :user_id

      t.timestamps
    end
  end
end
