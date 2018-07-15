require 'sinatra'
require 'vault'

set :public_folder, File.dirname(__FILE__) + '/assets'

get '/' do
  erb :index
end

# Request firebase configuration from Vault secrets manager
get '/firebase-credentials' do
  credentials = Vault.logical.read("firebase/initializationSettings")
  credentials.data.to_json
end
