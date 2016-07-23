class Idiom < ApplicationRecord

  validates_presence_of :text, :meaning
end
