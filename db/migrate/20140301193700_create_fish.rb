class CreateFish < ActiveRecord::Migration
  def change
    create_table :fish do |t|

      t.timestamps
    end
  end
end
