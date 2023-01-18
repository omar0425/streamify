class CreateArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|
      t.string "name"
      t.string "genres"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.string "image_url"
      t.string "spotify_id"
      t.integer "followers"
    end
  end
end
