class User < ApplicationRecord
  has_secure_password
  belongs_to :playlist
  has_many :songs, through: :playlist

end
