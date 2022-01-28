import React from 'react';

const SpotIndexItem = ({ spot }) => {
  return (
    // <div className="spot-index-item-container">
      <div className="spot-index-item-content">
        <img src={spot.photoUrl} className="spot-index-item-photo" alt="" />
        <p>{spot.name}</p>
      </div>
    // </div>
  );
};

export default SpotIndexItem;