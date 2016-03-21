Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/numberguesser' => 'numberguesser#form'
  get '/numberguesser/results' => 'numberguesser#results'

  get '/eightball' => 'eightball#form'
  get '/eightball/results' => 'eightball#results'

  get '/rockpaperscissors' => 'rockpaperscissors#form'
  get '/rockpaperscissors/results' => 'rockpaperscissors#results'

end
