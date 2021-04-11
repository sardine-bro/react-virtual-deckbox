Rails.application.routes.draw do
 
  resources :users do 
    resources :deckboxes
  end

  post '/authenticate', to: 'auth#create'
  post '/profile', to: 'auth#profile'


  
end
