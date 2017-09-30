import React, { Component } from 'react';

function AppDetails (props) {
  return (
    <div className="row mt-2">
      <div className="col-4 col-md-3">
        <img className="img-fluid" src={props.icon} alt="Weather icon" />
      </div>
      <div className="col-4 col-md-4">
      {
        props.unitValue === 'F' ?
        <h1 className="big-font">{props.tempF}<span className="units">&deg; F</span></h1>
        :
        <h1 className="big-font">{props.tempC}<span className="units">&deg; C</span></h1>
      }
      </div>
      <div className="col-4 col-md-5">
        <div className="small-font">
          <p>Humidity: <b>{props.humidity}</b></p>
          <p>Wind: <b>{props.windMPH} mph {props.windDegree}&deg;</b></p>
          <p>Precipitation: <b>{props.precipitation} mm</b></p>
          <p>UV: <b>{props.uv}</b></p>
        </div>
      </div>
    </div>
  );
}

export default AppDetails;
