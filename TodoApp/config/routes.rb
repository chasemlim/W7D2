Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :todo, except: [:edit]
  end
end