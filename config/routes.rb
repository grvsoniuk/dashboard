Rails.application.routes.draw do
  post 'reports/:type', to: 'reports#index'

  get 'settings/change_password'
  post 'settings/update_password'

  resources :audits

  get 'agents/mapping'
  get 'agents/search'
  get 'agents/all'
  resources :agents do
    post "add_as_user"
    post "remove_as_user"
  end
  resources :offices
  resources :teams
  resources :users, :only => [:index] do
    post 'change_role'
    post 'update_refresh_interval'
    delete 'remove', to: 'users#destroy'
  end
  resources :saved_searches

  get 'dashboard', to: 'dashboard#index'
  get 'dashboard/:id', to: 'dashboard#index'
  get 'tests', to: 'dashboard#tests'
  get 'update_agents', to: 'dashboard#update_agents'
  get 'update_agents', to: 'dashboard#update_agents'
  get 'update_agents', to: 'dashboard#update_agents'
  get 'update_tickets', to: 'dashboard#update_tickets'
  get 'update_all_tickets', to: 'dashboard#update_all_tickets'
  get 'update_organizations', to: 'dashboard#update_organizations'
  get 'agents_from_region', to: 'dashboard#agents_from_region'
  get 'agents_from_team', to: 'dashboard#agents_from_team'
  post 'search', to: 'dashboard#search'
  post 'save_search', to: 'dashboard#save_search'
  post 'make_default_search/:id', to: 'dashboard#make_default_search'
  
  get 'tickets', to: 'dashboard#tickets'
  get 'new_tickets', to: 'dashboard#new_tickets'
  post 'assign_ticket', to: 'dashboard#assign_ticket'

  devise_for :users

  root to: "dashboard#index"
end
