class AddWeightToFish < ActiveRecord::Migration
  def change
    add_column :fish, :weight, :integer
  end
end
