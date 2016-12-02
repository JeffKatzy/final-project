class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :artist
      t.string :genre
      t.string :album
      t.string :album_image
      t.integer :duration
      t.integer :playlist_id

      t.timestamps
    end
  end
end
