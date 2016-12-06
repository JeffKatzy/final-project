class User < ApplicationRecord
  has_secure_password
  has_one :playlist
  has_many :songs, -> {readonly}, through: :playlist

end
