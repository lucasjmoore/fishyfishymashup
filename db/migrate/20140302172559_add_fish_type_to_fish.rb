class AddFishTypeToFish < ActiveRecord::Migration
  def change
    add_column :fish, :fish_type, :string
    add_index :fish, :fish_type
  end
end
