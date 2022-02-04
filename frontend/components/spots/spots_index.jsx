import React from 'react';
import SpotIndexItem from './spot_index_item';
import SearchBackground from '../search/search_background';
// import banner from '../../../app/assets/images/banner-image.jpg'

class SpotsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    // const banner = require('../../../app/assets/images')
    return (
      <div>
        <div className="splash-heading-container">
          <h1 className="main-primary-heading">Find yourself outside.</h1>
          <h2 className="main-secondary-heading">Discover and book tent camping, RV <br/> parks, cabins, treehouses, and glamping.</h2>
        </div>
        <SearchBackground />
        <div className="spot-index-item-container">
          {this.props.spots.map(spot => <SpotIndexItem key={spot.id} spot={spot} />)}
        </div>`
      </div>
    )
  };
};

export default SpotsIndex;