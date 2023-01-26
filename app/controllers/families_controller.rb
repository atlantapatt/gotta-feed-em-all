class FamiliesController < ApplicationController
    def index
        families = Family.all
        render json: families, include: :users
    end

    def create
        family = Family.create(family_params)
        render json: family, status: :created
    end

    def show
        family = Family.find_by(last_name: params[:last_name])
        render json: family, status: :ok
    end

    private

    def family_params
        params.permit(:last_name, :password)
    end
end
