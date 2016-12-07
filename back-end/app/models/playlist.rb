class Playlist < ApplicationRecord
  # belongs_to :user
  has_many :user_playlists
  has_many :playlists, through: :user_playlists
  
  has_many :playlist_songs
  has_many :songs, through: :playlist_songs

end
