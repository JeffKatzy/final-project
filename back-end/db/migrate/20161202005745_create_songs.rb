class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :artist
      t.string :album
      t.string :spotify_id
      t.integer :duration
      t.integer :playlist_id
    end
  end
end
