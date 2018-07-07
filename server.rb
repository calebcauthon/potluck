require 'sinatra'

set :public_folder, File.dirname(__FILE__) + '/assets'
configure { set :server, :puma }

get '/' do
  erb :index
end