class IdiomsController < ApplicationController
  def start_search
    @idiom = Idiom.last
  end
end
