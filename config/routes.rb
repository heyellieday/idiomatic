Rails.application.routes.draw do
  #root means '/'
  #'idioms' represents controller
  root 'idioms#start_search'

  get '.well-known/acme-challenge/:id' => 'pages#letsencrypt'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
