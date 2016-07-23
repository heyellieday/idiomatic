# encoding: utf-8
# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Idiom, type: :model do

  let(:unsaved_idiom) { described_class.new }
  
  it 'does not save if missing a meaning and text' do
    unsaved_idiom.save

    expect(described_class.count).to eq 0
  end

  it 'saves if  meaning and text are present' do
    unsaved_idiom.text = "Someting else"
    unsaved_idiom.meaning = "Something"
    unsaved_idiom.save

    expect(described_class.count).to eq 1
  end
end