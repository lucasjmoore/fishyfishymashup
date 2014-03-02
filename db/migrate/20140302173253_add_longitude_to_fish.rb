class AddLongitudeToFish < ActiveRecord::Migration
  def change
    add_column :fish, :longitude, :decimal
  end
end
