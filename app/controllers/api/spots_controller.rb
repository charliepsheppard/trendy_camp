class Api::SpotsController < ApplicationController
  # def show
  #   @spot = Spot.find(params[:id])
  #   render :show
  # end

  def index
    @spots = Spot.all
    render :index
  end

  private

  def spot_params
    params.require(:spot).permit(:name)
  end
end
