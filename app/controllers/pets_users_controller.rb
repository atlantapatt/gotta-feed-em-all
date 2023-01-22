class PetsUsersController < ApplicationController

    def create
        pet_user = PetUser.create(pet_user_params)
        render json: pet_user
    end

    def show
        pet_user = PetUser.all
        render json: pet_user
    end

    private

    def pet_user_params
        params.permit(:user_id, :pet_id)    
    end
end
