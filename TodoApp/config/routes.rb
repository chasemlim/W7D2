Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :todos, except: [:edit, :new]
  end

  root to: "static_pages#root"
end