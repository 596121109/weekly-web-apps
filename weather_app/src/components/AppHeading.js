import React, { Component } from 'react';

function AppHeading (props) {
  return (
    <div className="d-inline-block">
      <h3>{props.location}</h3>
      <p>{props.date}</p>
      <p>{props.weather}</p>
    </div>
  );
}

export default AppHeading;
