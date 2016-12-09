Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/login', to: 'users#show'
  post '/songs/:id/destroy', to: 'songs#destroy'
  post '/groups/:id', to: 'groups#show'
  post '/groups/:id/destroy', to: 'groups#destroy'
  post '/search', to: 'songs#search'
  resources :users, :groups, :messages
  resources :songs, except: [:destroy]


end
