class User < ApplicationRecord
  has_secure_password
  validates :name, uniqueness: true

  has_many :user_groups
  has_many :groups, through: :user_groups
  has_many :messages
end
