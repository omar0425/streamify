class Song < ApplicationRecord
  belongs_to :playlists
  belongs_to :albums
  belongs_to :artists
  validates :year, numericality: { minimum: 1300, maximum: 2024 }
end
