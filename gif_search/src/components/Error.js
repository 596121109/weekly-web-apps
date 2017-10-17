import React from 'react';

function Error(props) {
  let errorIcon = {
    fontSize: '72px'
  }

  return(
    <div className="d-block mx-auto text-center light-text my-2">
      <i className="fa fa-exclamation-triangle pb-3" style={errorIcon} aria-hidden="true"></i>
      <p>{props.msg} Please, perform another a search.</p>
    </div>
  );
}

export default Error;
