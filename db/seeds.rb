# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
Spot.delete_all
Review.delete_all

demoUser = User.create({ first_name: 'Demo', last_name: 'User', email: 'demo@demo.com', zip_code: '05452', password: '123456' })

spot1 = Spot.create({
  name: 'Fern Gully',
  description: 'Nestled in Greenbank Washington on Whidbey Island. This 15-acre farm is just starting out. You can find seasonal fruit like Blackberries, Cherries, Apples, and Salmon Berries in abundance between July-September. We are a small family and a Grandma, so you may see us working the field, building a structure, or just laying in the stargazing hammock circle.',
  amenities: 'Potable water available, Showers available, Picnic table available, Wifi available, Bins available, No kitchen',
  category: 'Tent',
  price: 55
})
spot1.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/fern-gully.jpg'), filename: 'fern-gully.jpg') 

spot2 = Spot.create({
  name: 'Blueberry Hill Oasis and Old Growth',
  description: 'This is a beautiful 5.5 acre lot in the Olympic Peninsula. It has two ponds and lots of room to hike and camp. It is near some great hiking trails and a great place to stay if exploring the Peninsula.',
  amenities: 'Potable water available, Showers available, Picnic table available, Wifi available, Bins available',
  category: 'Vacation rental',
  price: 200
})
spot2.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/blueberry-hill.jpg'), filename: 'blueberry-hill.jpg')

spot3 = Spot.create({
  name: 'North Fork Campground',
  description: 'Taste the rainforest at North Fork Campground. Towering in at a modest 520 feet elevation, this campground is small but sweet with under ten sites in a temperate rainforest setting. Wet your primitive camping whistle any time of year.',
  amenities: 'Picnic table available',
  category: 'Tent',
  price: 30
})
spot3.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/north-fork.jpg'), filename: 'north-fork.jpg')

spot4 = Spot.create({
  name: 'Hoh Cabin',
  description: 'Expect a fantastical, unique, and otherworldly experience getting to sleep in America’s most popular rainforest at Hoh Campground. Get a site year-round along the Hoh River, put your feet up, and listen to the magical music all around you. Rain or no rain make sure to do the Hall of Mosses trail. It may be cold and it may be wet, but remember adventurers it is an experience you will never forget!',
  amenities: 'Potable water available, Kitchen available, Shower available, Picnic table available',
  category: 'Cabin',
  price: 35
})
spot4.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/hoh-cabin.jpg'), filename: 'hoh-cabin.jpg')

spot5 = Spot.create({
  name: 'S K Y C A M P',
  description: 'Sky Camp is like a home without walls, offering panoramic desert views that will take your breath away. The camp is situated high on the hills of the Bartlett Mountain Range and offers great views of Joshua Tree National Park, just minutes away.',
  amenities: 'Potable water available, Showers available, Picnic tables available',
  category: 'Tent' ,
  price: 65
})
spot5.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/skycamp.jpg'), filename: 'skycamp.jpg')

spot6 = Spot.create({
  name: 'The Magic Hour Home',
  description: 'The Magic Hour House is a newly renovated, stylish 5 bedroom home that sleeps 12 people. This house is perfect for families and big groups of friends. You’ll have a beautiful spacious 2,300 sq ft home with a large kitchen, different dining spaces, living room and a huge backyard that includes amenities like a jacuzzi spa, XL cowboy pool, a natural wood-burning fire pit, hammocks, a very cool game room with a full size Ping - pong table and Pool table and lots of space for stargazing and wandering.',
  amenities: 'Potable water available, Kitchen available, Showers available, Wifi available, Bins available, Laundry present, Hot tub available.',
  category: 'Vacation rental',
  price: 600
})
spot6.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/magic-hour.jpg'), filename: 'magic-hour.jpg')

spot7 = Spot.create({
  name: 'The Saharan',
  description: "Sky Fire Ranch is a 5 acre parcel of land located on the last frontier of the Californian wild west in a place called, Wonder Valley. We're less than a 10-minute drive from the Oasis (or the East Entrance) into Joshua Tree National Park, and are surrounded on all sides by wilderness areas such as the Sheephole Valley, Cleghorn Wilderness, and of course... Joshua Tree National Park.",
  amenities: 'Potable water available, Kitchen available, Showers available, Bins available',
  category: 'Canvas tent',
  price: 99
})
spot7.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/saharan.jpg'), filename: 'saharan.jpg')

spot8 = Spot.create({
  name: 'The Watering Hole',
  description: 'Tent camping at its best. Less than a mile on a well maintained desert road. Experience star viewing like no place else. Away from it all, yet close enough for Pizza delivery. There is no traffic noise. 360-degree views.',
  amenities: 'Potable water available, Kitchen available, Showers available, Bins available',
  category: 'Tent',
  price: 48
})
spot8.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/watering-hole.jpg'), filename: 'watering-hole.jpg')

spot9 = Spot.create({
  name: 'The Castle House | Yurt 1 with Pool',
  description: 'The ULTIMATE "Yurt" experience! Featured on HGTV: The Castle House Estate Yurt Tent 1 brings traditional camping to another level. Located in the heart of Joshua Tree and minutes from the National Park. This unique medieval compound blends indoor-outdoor living with an emphasis on entertaining. The Castle House Estate is situated on eight picturesque acres, surrounded by many more private undeveloped acres.',
  amenities: 'Potable water available, Kitchen available, Showers available, Wifi available, Bins available',
  category: 'Yurt',
  price: 222
})
spot9.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/castle-house.jpg'), filename: 'castle-house.jpg')

spot10 = Spot.create({
  name: 'Yellowstone Dreamin Camp',
  description: 'We are a Glamping Camp built to let people experience the great Big Sky Country of Montana staying in Paradise Valley. We are located less than 30 miles from Yellowstone National Park and surrounded by all kinds of activities and adventure.',
  amenities: 'Potable water available, Kitchen available, Showers available, Wifi available, Bins available, Laundry present',
  category: 'Tent',
  price: 263
})
spot10.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/yellowstone-dreamin.jpg'), filename: 'yellowstone-dreamin.jpg')

spot11 = Spot.create({
  name: "Sportsman's Retreat RV Sites",
  description: 'We are located right in the middle of Gardiner MT. Less than a 1/4 mile from Yellowstone Parks North entrance. There are only 2 RV sites on the property and located in a quiet neighborhood. Beautiful views of the mountains. Wildlife such as deer and elk frequent the property.',
  amenities: 'Potable water available, Picnic table available, Bins available',
  category: 'RV',
  price: 85
})
spot11.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/sportsman-retreat.jpg'), filename: 'sportsman-retreat.jpg')

spot12 = Spot.create({
  name: 'Cabin on Arcadia Reservoir',
  description: 'Access to private lake: swimming and fishing and boating (no gas engines allowed). Private sand dune area for ATVs, with access to hundreds of miles of public land trails. St Anthony Sand Dunes, Civil Defense Caves, Ice Caves and Island Park Reservoir are all accessible on an ATV day trip.  Yellowstone National Park is an 80 minute drive, though coming and leaving the property requires 20-30 minutes on a dirt road.',
  amenities: 'Potable water available, Kitchen available, Showers available, Picnic table available, Bins available',
  category: 'Cabin',
  price: 160
})
spot12.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/arcadia-cabin.jpg'), filename: 'arcadia-cabin.jpg')

spot13 = Spot.create({
  name: 'Desert Moon RV Camping',
  description: 'Setup your tent and bask in the shade of the multiple fruit trees around the campgrounds. Enjoy some respite before exploring the beautiful canyons and desert landscapes that surround the Desert Moon and beyond. We have 2 showers and potable water on site.',
  amenities: 'Potable water available, Showers available, Wifi available, Bins available',
  category: 'RV',
  price: 25
})
spot13.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/desert-moon.jpg'), filename: 'desert-moon.jpg')

spot14 = Spot.create({
  name: 'Sky Dancers Den',
  description: 'This tent is equipped with a queen bed, bedding, an outdoor fire ring which is appropriate for cooking, a picnic table, and solar lighting inside and out.',
  amenities: 'Kitchen available, Showers available, Picnic table available, Wifi available, Bins available',
  category: 'Canvas tent',
  price: 95
})
spot14.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/sky-dancers.jpg'), filename: 'sky-dancers.jpg')

spot15 = Spot.create({
  name: 'North Campground',
  description: 'North Campground makes it easy to swing by the general store for an ice cream before watching the sun sink behind the hoodoos at Sunset Point. RV wranglers, tent campers and groups will all find some shade, access to restrooms, and firepits. Definitely try for a spot along the rim, and while you’ll want to stoke a fire into the night, don’t forget to put it out a bit before bed and enjoy that famous Bryce Canyon night sky!',
  amenities: 'Potable water available, Showers available, Picnic table available',
  category: 'Tent',
  price: 20
})
spot15.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/north-campground.jpg'), filename: 'north-campground.jpg')

spot16 = Spot.create({
  name: 'Zion Backcountry Sheep Camps',
  description: "You can't get much more authentic and unique than spending a night under the stars in a sheep camp! These two were used as traditional sheep camps and would port to a new location each time the sheep were trailed to new pasture.",
  amenities: 'Potable water available, Showers available, Picnic table available, Bins available',
  category: 'Cabin',
  price: 105
})
spot16.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/sheep-camp.jpg'), filename: 'sheep-camp.jpg')

spot17 = Spot.create({
  name: 'Apple Hollow Tiny House',
  description: 'NEW! Combining rustic appeal with a modern touch, this Tiny House offers an innovative perspective on vacation lodging! Our place is located on one of the most impressive properties around the Zion/Bryce area! 14 acres of apple trees and farmland surrounded by breathtaking mountain peaks right off highway 89.',
  amenities: 'Potable water available, Showers available, Picnic table available, Wifi available, Bins available',
  category: 'Cabin',
  price: 215
})
spot17.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/apple-hollow.jpg'), filename: 'apple-hollow.jpg')

spot18 = Spot.create({
  name: 'Yurt Glamping, stargazing',
  description: 'Our yurt is close to The Turquoise Trail (20 mins), Santa Fe (1 and half hours), and Albuquerque (40 mins). You’ll love the views, the stunning New Mexico sky, stargazing at night and  the coziness of the yurt. Our place is good for couples, two friends or solo adventurers.',
  amenities: 'Potable water available, Showers available, Picnic table available, Wifi available, Bins available',
  category: 'Yurt',
  price: 130
})
spot18.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/yurt-stargazing.jpg'), filename: 'yurt-stargazing.jpg')

spot19 = Spot.create({
  name: 'Zen House',
  description: "The Zen House is a cozy get away about 20 minutes from Museum Hill, 25 minutes from Meow Wolf, Old Town Santa Fe Plaza and just 15 minutes to delicious food at Harry's Roadhouse or Cafe Fina.",
  amenities: 'Potable water available, Showers available, Kitchen available, Picnic table available, Wifi available, Bins available',
  category: 'Cabin',
  price: 135
})
spot19.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/zen-house.jpg'), filename: 'zen-house.jpg')

spot20 = Spot.create({
  name: 'Cozy Hobbit House on Bainbridge',
  description: "This one room Hobbit Hole has everything in it's  7.5x15.5' (cozy): Comfy convertible bed/couch complete with linens, a small table with 2 chairs for playing games and eating, puzzles, games, snacks, hot water kettle, coffee maker, bluetooth speaker, electric fireplace, books, sketchpad with colored pencils, and more!",
  amenities: 'Potable water available, Picnic table available, Bins available',
  category: 'Cabin',
  price: 85
})
spot20.photo.attach(io: open('https://ik.imagekit.io/4hr81t1ot/trendy-camp/hobbit-house.jpg'), filename: 'hobbit-house.jpg')

review1 = Review.create({
  title: 'Great stay in a beautiful yurt',
  body: 'We had a wonderful stay at The Castle House. It was beautiful and the stars were amazing. Pretty much every night we would sit in the pool and look up at the stars. I would absolutely recommend this to a friend.',
  rating: 5,
  user_id: demoUser.id,
  spot_id: spot9.id
})

review2 = Review.create({
  title: 'Not a great stay',
  body: 'There were all sorts of problems. The place was dirty and I felt like I had to clean the whole place myself. I will likely not be returning.',
  rating: 2,
  user_id: demoUser.id,
  spot_id: spot1.id
})