class AddColumnToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :spotify_id, :integer
  end
end
