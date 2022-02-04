# TrendyCamp

TrendyCamp is a clone of the popular site HipCamp. The purpose of the site is to allow people to book campsites, cabins, and any other form of glamping on both public and private land. The site also allows for hosts to put up their land, campgrounds or vacation rentals for users to book.

[Visit the live site](https://trendycamp.herokuapp.com/#/)

## Technologies used
* Postgres
* Rails
* React
* React router
* Redux

## Splash page

![splash page](https://user-images.githubusercontent.com/45123867/152576191-ae99cba1-b130-4355-87b5-da609c514eae.png)

## Spots index

![spots index](https://user-images.githubusercontent.com/45123867/152576983-f24ffbfe-c45f-47c0-a8fc-ddc0309375c8.png)

## Individual spot

![individual spot](https://user-images.githubusercontent.com/45123867/152578447-26a42311-87f0-4856-b6c3-11bef91b2881.png)

## Leave a review

![leave a review](https://user-images.githubusercontent.com/45123867/152579359-74c954c6-e6eb-4c4b-90b4-c0c962934420.png)

## Difficult features

### User auth

I was challenged throughout this project, but user auth was one of the bigger ones that I faced. It forces you to really understand how the React/Redux cycle works as well as how the backend works to serve up information to the front end. It really allowed me to follow each piece. One of the issues I faced was creating a solid state shape by nesting my reducers into distinct sections in order to receive information in the way that is easiest to maniuplave via React. 

```javascript
const entitiesReducer = combineReducers({
  users: usersReducer,
  spots: spotsReducer,
  reviews: reviewsReducer
});
```
