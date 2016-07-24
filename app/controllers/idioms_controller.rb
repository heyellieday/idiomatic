class IdiomsController < ApplicationController
  def start_search
    set_meta_tags({
      :title => 'The meaning of idioms',
      :description => 'Search for and discover the meanings of common idioms.',
      :og => {
        :title    => :title,
        :type     => 'website',
        :url      => root_url,
        :image    => view_context.image_url("facebookcover.png"),
        :description => :description
      }
    })
  end
end
