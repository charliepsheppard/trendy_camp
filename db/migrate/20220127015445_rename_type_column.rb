class RenameTypeColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :spots, :type, :category
  end
end
