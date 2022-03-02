class UpdateRatingToRecommended < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :rating
    add_column :reviews, :recommended, :boolean, default: true, null: false
  end
end
