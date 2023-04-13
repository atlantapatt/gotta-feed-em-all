class FamiliesController < ApplicationController
    def index
        families = Family.all
        render json: families, include: :users
    end

    def fPet
        family = Family.find_by(last_name: params[:last_name])
        pets = Pet.where(family_id: family)
        if family
            render json: pets
        end
    end

    def users
        family = Family.find_by(id: params[:id])
        users = User.where(family_id: family)
        if family
            render json: users
        end
    end

    def create
        family = Family.create!(family_params)
        if family
            render json: family, status: :created
        else 
            render json: {errors: ["Requires Username and Password"]}, status: :unauthorized
        end
        
    end

    def fid
        family = Family.find_by(id: params[:id])
        render json: family, status: :ok
    end

    def show
        family = Family.find_by(last_name: params[:last_name])
        if family&.authenticate(params[:password])
            render json: family, status: :ok
        else
            render json: {errors: ["Invalid Family Name or Password"]}, status: :unauthorized
        end
    end

    private

    def family_params
        params.permit(:last_name, :password)
    end
end
