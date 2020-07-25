import React from 'react';

class NotFound extends React.Component {
  paragraphStyle = {
    textAlign: 'center'
  };
  
  render() {
    return <p style={this.paragraphStyle}>Sorry about your luck. Page not found.</p>;
  }
}

export default NotFound;