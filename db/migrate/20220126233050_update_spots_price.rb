class UpdateSpotsPrice < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :price, :integer, null: false
  end
end
