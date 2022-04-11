import React, { useEffect } from 'react';
import SpotIndexItem from './spot_index_item';
import SearchBackground from '../search/search_background';
// import banner from '../../../app/assets/images/banner-image.jpg'

const SpotsIndex = (props) => {
  useEffect(() => {
    props.fetchSpots();
  }, []);

  return (
    <div>
      <div className="splash-heading-container">
        <h1 className="main-primary-heading">Find yourself outside.</h1>
        <h2 className="main-secondary-heading">Discover and book tent camping, RV <br/> parks, cabins, treehouses, and glamping.</h2>
      </div>
      <SearchBackground />
      <div className="spot-index-item-container">
        {props.spots.map(spot => <SpotIndexItem key={spot.id} spot={spot} />)}
      </div>`
    </div>
  )
}

export default SpotsIndex;