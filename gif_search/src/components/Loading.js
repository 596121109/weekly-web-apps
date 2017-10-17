import React from 'react';

function Loading(props) {
  let loadingIcon = {
    fontSize: 72,
  }

  return(
    <div className="d-block mx-auto text-center light-text my-2">
      <i className="fa fa-spinner fa-spin fa-3x mb-3" style={loadingIcon} aria-hidden="true"></i>
      <p>Please, wait while content is being loaded</p>
    </div>
  );
}

export default Loading;
