import React from 'react';

class SpotDetail extends React.Component {
  render() {
    const { spot } = this.props;
    return (
      <div className="spot-detail-container">
        <div className="spot-detail-photo-container">
          <img src={spot.photoUrl} className="spot-photo" alt="" />
        </div>
        <div className="spot-detail-info">
          <h1>{spot.name}</h1>
          <p className="spot-detail-info-desc">{spot.description}</p>
        </div>
      </div>
    )
  }
}

export default SpotDetail