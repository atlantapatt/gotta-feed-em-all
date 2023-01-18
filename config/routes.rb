Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  get 'user', to: 'users#index'
  get 'family', to: 'families#index'
  get 'me', to: 'users#show'
  get 'types', to: 'types#index'
  get 'pet', to: 'pets#index'
  post 'pet', to: 'pets#create'
  post 'signup', to: 'users#create'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
end
