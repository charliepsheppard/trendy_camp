class UpdateSpotsTitle < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :name, :string, null: false
  end
end
