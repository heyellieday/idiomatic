class PagesController < ApplicationController
  def letsencrypt
    render text: ENV["letsencrypt_key"]
  end
end
