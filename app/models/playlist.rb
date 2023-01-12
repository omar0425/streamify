class Playlist < ApplicationRecord
  has_many :songs
  has_many :albums
  has_many :playlists, through: :songs
end
