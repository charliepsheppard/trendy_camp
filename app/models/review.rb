class Review < ApplicationRecord
  validates :title, :body, :rating, :user_id, :spot_id, presence: true

  belongs_to :spot,
    class_name: :Spot

  belongs_to :user,
    class_name: :User

end
