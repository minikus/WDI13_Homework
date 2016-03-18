require 'pry'
require 'httparty'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :home
end

get '/movieOutput' do
@movie = params[:movie_input]

@results = HTTParty.get "http://omdbapi.com/?t=#{@movie}"

@poster = @results['Poster']
@runtime = @results['Runtime']
@director = @results['Director']
@title = @results['Title']
@year = @results['Year']

erb :movieOutput
end
