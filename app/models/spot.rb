class Spot < ApplicationRecord
  validates :name, :description, :amenities, :category, :price, presence: true

  has_one_attached :photo

end
