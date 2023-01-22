class PetsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessible_entity


    def create
        pet = Pet.create(pet_params)
        render json: pet, status: :created
    end

    def index
        pet = Pet.all
        render json: pet, include: :users
    end

    def show
        user = User.find_by(id: session[:user_id])
        pet = Pet
        if user
            render json: user, include: :pets
        end
    end

    def destroy
        pet = Pet.find_by(id: params[:id])
        if pet
            pet.destroy
            head :no_content
        end
    end

    private

    def pet_params
        params.permit(:name, :pet_type_id, :family_id)
    end

    def render_unprocessible_entity(invalid)
        render json: {errors: invalid.record.errors}, status: 422
    end
end
