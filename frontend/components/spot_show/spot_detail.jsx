import React from 'react';

class SpotDetail extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.spot.name}</h1>
      </div>
    )
  }
}

export default SpotDetail