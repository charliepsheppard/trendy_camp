class Spot < ApplicationRecord
  validates :name, :description, :amenities, :category, :price, presence: true

  has_one_attached :photo

  has_many :reviews,
    class_name: :Review

end
