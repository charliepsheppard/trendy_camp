class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :description, null: false
      t.string :amenities, null: false
      t.string :type, null: false
      
      t.timestamps
    end
  end
end
