Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/messages', to: 'messages#create'

  post '/login', to: 'users#show'
  # post '/songs/:id/destroy', to: 'songs#destroy'
  # post '/groups/:id', to: 'groups#show'
  # post '/groups/:id/destroy', to: 'groups#destroy'
  post '/search', to: 'songs#search'
  resources :users, only: [:create]
  resources :groups, only: [:create, :show, :index, :destroy]
  resources :songs, only: [:create, :destroy]
  resources :messages, only: [:create, :destroy]
  # resources :users, :groups, :messages
  # resources :songs, except: [:destroy]


end
