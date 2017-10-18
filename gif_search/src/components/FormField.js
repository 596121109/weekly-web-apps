import React from 'react';
import { Row, Col, FormGroup, FormControl, InputGroup, ButtonToolbar, Button } from 'react-bootstrap';

function FormField(props) {
  let borderRadius = {
    borderRadius: 0,
  }

  let smPadding = {
    padding: 5,
  }

  return(
    <Row>
      <Col lg={12} style={smPadding}>
        <form onSubmit={props.submit}>
          <FormGroup>
            <InputGroup>
              <FormControl
                onChange={props.change}
                style={borderRadius}
                type="text"
                placeholder="Search for awesome gifs!"
              />
              <ButtonToolbar>
                <Button style={borderRadius} bsStyle="primary">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </Button>
              </ButtonToolbar>
            </InputGroup>
          </FormGroup>
        </form>
      </Col>
    </Row>
  );
}

export default FormField;
