json.array! @spots do |spot|
  json.extract! spot, :id, :name
  json.photoUrl url_for(spot.photo)
end