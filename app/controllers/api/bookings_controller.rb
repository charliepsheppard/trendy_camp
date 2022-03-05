class Api::BookingsController < ApplicationController
  before_action :require_logged_in

  def index 
    @bookings = Booking.includes(:spot).where(user_id: params[:user_id])
  end

  def create
    @booking = Booking.new(booking_params)
    
    if @booking.save
      render "api/bookings/show"
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
  end

  private

  def booking_params
    params.require(:booking).permit(:user_id, :spot_id, :start_date, :end_date, :num_guests, :total_price)
  end

end
