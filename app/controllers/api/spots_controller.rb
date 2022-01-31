class Api::SpotsController < ApplicationController

  def index
    @spots = Spot.all
    render :index
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def create
    @spot = Spot.create(spot_params)
    render :show
  end

  private

  def spot_params
    params.require(:spot).permit(:name, :description, :amenities, :category, :price)
  end
end
