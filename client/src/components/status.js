import React from 'react';

export const StatusIndicator = (props) => (
  <div className="status-indicator">
    {props.on ?
      <span className="on"></span> :
      <span className="off"></span>}
  </div>
);

StatusIndicator.propTypes = {
  on: React.PropTypes.bool,
};
