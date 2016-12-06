# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: "wes@wes.com", password: "wes", playlist_id: Playlist.create(user_id: 1).id)
User.create(email: "charlie@charlie.com", password: "charlie", playlist_id: Playlist.create(user_id: 2).id)
User.create(email: "niky@niky.com", password: "niky", playlist_id: Playlist.create(user_id: 3).id)
