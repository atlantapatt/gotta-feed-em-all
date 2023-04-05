class SchedulesController < ApplicationController
    def create
        schedule = Schedule.create(schedule_params)
        render json: schedule, status: :created
    end


    private

    def schedule_params
        params.permit(:day, :AMorPM, :pet_id, :user, :user_id, :isfed)
    end
end
