import React from 'react';

function Output(props) {
  return(
    <div className="row">
      <div className="col-md-8 push-md-2">
        <a className="results" href={props.link} target="_blank">
          <div className="card-block mt-4">
            <h3 className="mb-2">{props.title}</h3>
            <p>{props.description}</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Output;
