import React from 'react';
import { connect } from 'react-redux';
import { fetchSpot } from '../../actions/spot_actions';
import SpotShow from './spot_show';

const mapStateToProps = (state, { match }) => {
  const spotId = parseInt(match.params.spotId);
  return {
    spot: state.entities.spots[spotId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpot: spotId => dispatch(fetchSpot(spotId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpotShow);