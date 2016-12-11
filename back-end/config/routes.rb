Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/messages', to: 'messages#create'

  post '/users', to: 'users#create'
  post '/login', to: 'users#show'

  post '/groups', to: 'groups#create'
  post '/groups/:id', to: 'groups#show'
  post '/groups/:id/destroy', to: 'groups#destroy'

  post '/songs', to: 'songs#create'
  post '/songs/:id/destroy', to: 'songs#destroy'
  post '/search', to: 'songs#search'

  post '/messages', to: 'messages#create'
  post '/messages/:id/destroy', to: 'messages#destroy'


end
