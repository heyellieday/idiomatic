class CreateIdioms < ActiveRecord::Migration[5.0]
  def change
    create_table :idioms do |t|
      t.string :text
      t.text :meaning

      t.timestamps
    end
  end
end
