import React, {Component} from 'react';
var marked = require('marked');

class Container extends Component {
  constructor() {
    super();
    this.state = {
      output: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*',
    };
  }

  handleChange = (e) => {
    const output = e.target.value;
    this.setState({output});
  }

  render() {
    return (
      <div className="app-body">
        <div className="container py-4">
          <div className="row">
            <form className="col-md-6">
              <div className="form-group">
                <h4 className="title pb-3 text-center">Markdown Input</h4>
                <textarea value={this.state.output} onChange={this.handleChange} id="text-input" className="form-control" rows="30"></textarea>
              </div>
            </form>
            <div className="col-md-6 pt-3 pt-md-0">
              <h4 className="title pb-3 text-center">Markdown Output</h4>
              <div dangerouslySetInnerHTML={{__html: marked(this.state.output)}} id="text-output" className="text-justify">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
