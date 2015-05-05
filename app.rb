require 'sinatra'
require 'tilt/erubis'

get '/' do
  erb :index
end
