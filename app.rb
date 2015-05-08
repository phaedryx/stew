require 'sinatra'
require 'tilt/erubis'

set server: 'puma', connections: []

get '/' do
  erb :index
end

get '/stream', provides: 'text/event-stream' do
  stream :keep_open do |out|
    settings.connections << out
    out.callback { settings.connections.delete(out) }
  end
end

post '/' do
  settings.connections.each { |out| out << "data: #{params[:msg]}\n\n" }
  204
end
