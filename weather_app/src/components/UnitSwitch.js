import React, { Component } from 'react';

function UnitSwitch (props) {
  return (
    <div className="d-inline-block btn-group btn-group-sm" data-toggle="buttons">
      <label id="F" onClick={props.handleClick} className="btn btn-primary active">
        <input type="radio" name="options" checked></input>
        &deg; F
      </label>
      <label id="C" onClick={props.handleClick} className="btn btn-primary">
        <input type="radio" name="options"></input>
        &deg; C
      </label>
    </div>
  );
}

export default UnitSwitch;
