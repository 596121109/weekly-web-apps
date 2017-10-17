import React from 'react';
import { Col } from 'react-bootstrap';

let Output = (props) => {
  let gifStyle = {
    height: 250,
    width: '100%',
  }

  let smPadding = {
    padding: 5,
  }

  return(
    <Col sm={6} lg={4} style={smPadding}>
      <a href={props.link} target="_blank">
        <img
          style={gifStyle}
          src={props.src} alt="Gif failed to load"
        />
      </a>
    </Col>
  );
}

export default Output;
