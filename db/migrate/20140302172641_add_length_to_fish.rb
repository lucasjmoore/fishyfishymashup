class AddLengthToFish < ActiveRecord::Migration
  def change
    add_column :fish, :length, :integer
  end
end
