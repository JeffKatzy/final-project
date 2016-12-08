require 'rubygems'
require 'httparty'

class SpotifyAPI
  include HTTParty

  def self.search(search_term)
    uri = "https://api.spotify.com/v1/search?q=#{search_term}&type=track"
    response = HTTParty.get(uri)
    JSON.parse(response.body)["tracks"]["items"]
  end

end
