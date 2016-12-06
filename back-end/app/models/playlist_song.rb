class PlaylistSong < ApplicationRecord
  belongs_to :playlists
  belongs_to :songs
end
