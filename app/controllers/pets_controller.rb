class PetsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessible_entity


    def create
        pet = Pet.create(pet_params)
        render json: pet, status: :created
    end

    def index
        pet = Pet.all
        render json: pet, status: :ok
    end

    private

    def pet_params
        params.permit(:name, :pet_type_id, :family_id)
    end

    def render_unprocessible_entity(invalid)
        render json: {errors: invalid.record.errors}, status: 422
    end
end
