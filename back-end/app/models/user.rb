class User < ApplicationRecord
  has_secure_password
  has_one :playlist
  has_many :songs, through: :playlist


end
