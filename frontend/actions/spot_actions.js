import * as SpotAPIUtil from '../util/spot_api_util';

export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';

export const receiveAllSpots = spots => {
  return {
    type: RECEIVE_ALL_SPOTS,
    spots
  };
};

export const receiveSpot = ({spot}) => {
  return {
    type: RECEIVE_SPOT,
    spot
  };
};

export const fetchSpots = () => dispatch => {
  return SpotAPIUtil.fetchSpots()
    .then(spots => dispatch(receiveAllSpots(spots)));
};

export const fetchSpot = spotId => dispatch => {
  return SpotAPIUtil.fetchSpot(spotId)
    .then(spot => dispatch(receiveSpot(spot)));
};
