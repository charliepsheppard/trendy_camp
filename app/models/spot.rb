class Spot < ApplicationRecord
  validates :name, :description, :amenities, :category, :photo, :price, presence: true

  # has_one_attached :photo

  has_many :reviews,
    class_name: :Review
  
  has_many :bookings,
    class_name: :Booking

end
