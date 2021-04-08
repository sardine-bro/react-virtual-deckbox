Rails.application.routes.draw do
  # resources :deckboxes
  resources :users do 
    :deckboxes
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
