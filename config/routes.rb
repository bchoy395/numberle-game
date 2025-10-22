Rails.application.routes.draw do
  root "numberle#index"

  resource :numberle, controller: :numberle, only: :show do
    post :guess
    get :result
  end
end
