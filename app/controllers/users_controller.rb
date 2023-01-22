class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessible_entity

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index
        users = User.all
        render json: users, include: :pets
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user, include: :pets
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

      def destroy
        user = User.find_by(id: params[:id])
        if user
            user.destroy
            head :no_content
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :family_id, :name)
    end

    def render_unprocessible_entity(invalid)
        render json: {errors: invalid.record.errors}, status: 422
    end
end
