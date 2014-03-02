class AddLatitudeToFish < ActiveRecord::Migration
  def change
    add_column :fish, :latitude, :decimal

  end
end
