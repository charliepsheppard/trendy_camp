

export const fetchSpots = spots => {
  return $.ajax({
    method: 'GET',
    url: '/api/spots'
  })
}