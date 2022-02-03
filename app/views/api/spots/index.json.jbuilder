# json.array! @spots do |spot|
#   json.extract! spot, :id, :name
#   json.photoUrl url_for(spot.photo)
# end

@spots.each do |spot|
  json.set! spot.id do
    json.partial! 'spot', spot: spot
    json.reviews spot.reviews
  end
end