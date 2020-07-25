import React from 'react';

class NotFound extends React.Component {
  render() {
    const paragraphStyle = {
      textAlign: 'center',
    };

    return (
      <div>
        <p style={paragraphStyle}> Sorry about your luck. Page not found.</p>
      </div>
    );
  }
}

export default NotFound;