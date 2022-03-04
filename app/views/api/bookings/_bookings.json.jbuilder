json.extract! booking, :id, :start_date, :end_date, :spot_id, :user_id, :num_guests, :total_price
json.user booking.user
json.spot booking.spot