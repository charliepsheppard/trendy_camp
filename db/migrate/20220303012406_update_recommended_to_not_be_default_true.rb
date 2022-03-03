class UpdateRecommendedToNotBeDefaultTrue < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :recommended
    add_column :reviews, :recommended, :boolean
  end
end
