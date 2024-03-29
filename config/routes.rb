Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  get 'user', to: 'users#index'
  get 'family', to: 'families#index'
  get 'me', to: 'users#show'
  get 'user/:id/pets', to: 'pets#pets'
  get 'petuser', to: 'pets_users#show'
  get 'types', to: 'types#index'
  get 'pet', to: 'pets#index'
  get 'pet/:id', to: 'pets#petSchedules'
  get 'onlypets', to: 'pets#show'
  get 'family/:id', to: 'families#fid'
  get 'family/:id/users', to: 'families#users'
  get 'family/:last_name/pets', to: 'families#fPet'
  get 'families/:last_name', to: 'families#show'
  patch 'user/:id', to: 'users#update'
  post 'pet', to: 'pets#create'
  post 'signup', to: 'users#create'
  post 'login', to: 'sessions#create'
  post 'family', to: 'families#create'
  post 'schedule', to: 'schedules#create'
  post 'petuser', to: 'pets_users#create'
  delete 'logout', to: 'sessions#destroy'
  delete 'pet/:id', to: 'pets#destroy'
  delete 'user/:id', to: 'users#destroy'

  get "pets/search/:term", to: 'pets#search_action'
end
