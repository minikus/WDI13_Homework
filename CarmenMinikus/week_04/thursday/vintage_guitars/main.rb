require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'


get '/' do
  erb :home
end

get '/guitars' do
  @guitars = query_db 'SELECT * FROM guitars'
  erb :guitars_index
end


get '/guitars/new' do
  erb :guitars_new
end

get '/guitars/:id' do
  @guitar = query_db "SELECT * FROM guitars WHERE id = #{ params[:id] }"
  erb :guitars_show
end



post '/guitars' do
  query = "INSERT INTO guitars (name, make, year, played_by, image) VALUES ( '#{params[:name]}', '#{params[:make]}', '#{params[:year]}', '#{params[:played_by]}', '#{params[:image]}')"
  query_db query
  redirect '/guitars'
end



get '/guitars/:id/delete' do
  query_db "DELETE FROM guitars WHERE id = #{ params[:id] }"
  redirect '/guitars'
end

get '/guitars/:id/edit' do
  @guitar = query_db "SELECT * FROM butterflies WHERE id = #{ params[:id] }"
  erb :guitars_edit
end






def query_db(sql)
  db = SQLite3::Database.new 'Database.db'
  db.results_as_hash = true

  puts sql

  result = db.execute sql
  db.close
  result
end
