require 'rails_helper'

RSpec.describe IdiomsController, type: :controller do

  describe "GET #start_search" do
    it "returns http success" do
      get :start_search
      expect(response).to have_http_status(:success)
    end
  end

end
