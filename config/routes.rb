Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create] do 
      resources :bookings, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :spots, only: [:index, :show, :create] do 
      resources :reviews, only: [:index]
    end
    resources :bookings, only: [:create, :destroy]
    resources :reviews, only: [:create, :show, :update, :destroy]
  end
end
