require 'rubygems'
require 'httparty'

class SpotifyAPI
  include HTTParty
  # base_uri 'https://api.spotify.com/v1/search'

  def self.search(search_term)
    byebug
    uri = "https://api.spotify.com/v1/search?q=#{search_term}&type=track"
    response = HTTParty.get(uri)
    byebug
    JSON.parse(response.body)
  end

end
