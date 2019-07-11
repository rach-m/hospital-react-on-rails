Rails.application.routes.draw do
  resources :patients
  resources :doctors
  resources :doctors do
  resources :patients, :controller => 'doctor_patients', :only => [:index, :show, :create, :destroy]
end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
