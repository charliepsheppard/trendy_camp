json.extract! spot, :id, :name, :description, :amenities, :category, :price, :reviews
json.photoUrl url_for(spot.photo)