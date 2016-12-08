Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/login', to: 'users#login'
  post '/songs/:id/destroy', to: 'songs#destroy'
  post '/playlists/destroy', to: 'playlists#destroy'
  post '/search', to: 'songs#search'
  post '/invite', to: 'playlists#invite_user'
  resources :users, :sessions, :playlists
  resources :songs, except: [:destroy]


end
