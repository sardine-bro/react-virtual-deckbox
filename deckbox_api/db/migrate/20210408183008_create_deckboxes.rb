class CreateDeckboxes < ActiveRecord::Migration[6.1]
  def change
    create_table :deckboxes do |t|
      t.string :card_name
      t.index :quantity
      t.string :image
      t.string :deck_name

      t.timestamps
    end
  end
end
