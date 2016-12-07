Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/login', to: 'users#login'
  get '/playlists/:id', to: 'playlists#show'
  post '/songs/:id/destroy', to: 'songs#destroy'
  resources :users, :sessions, :playlists
  resources :songs, except: [:destroy]


end
