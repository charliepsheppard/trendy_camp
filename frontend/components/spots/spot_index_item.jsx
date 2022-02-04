import React from 'react';
import { Link } from 'react-router-dom';

const SpotIndexItem = ({ spot }) => {
  return (
    // <div className="spot-index-item-container">
      <div className="spot-index-item-content">
        <Link to={`/spots/${spot.id}`} className="spot-index-item-link">
          <img src={spot.photoUrl} className="spot-index-item-photo" alt="" />
          <p className="spot-index-name">{spot.name}</p>
        <p className="spot-index-price">From <span className="spot-price-amount">${spot.price}</span>/night</p>
        </Link>
      </div>
    // </div>
  );
};

export default SpotIndexItem;