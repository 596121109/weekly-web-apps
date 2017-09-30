import React, { Component } from 'react';

function SubmitForm (props) {
  return (
    <form onSubmit={props.submit} className="form-inline mt-4 justify-content-around">
      <input
        value={props.inputValue}
        onChange={props.change}
        className="form-control mb-4 mb-sm-0"
        type="text" placeholder="City, State or Zip Code">
      </input>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default SubmitForm;
