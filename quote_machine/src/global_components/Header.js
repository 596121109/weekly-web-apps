import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div>
        <div className="navbar navbar-inverse bg-inverse">
          <div className="border container d-flex justify-content-between">
            <a href="http://weeklywebapps.com" className="navbar-brand">WEEKLY WEB APPS</a>
          </div>
        </div>

        <div className="pt-4">
          <div className="bg-white text-center pt-5 mt-2">
            <h1 className="pb-5 app-title">Quote Generator</h1>
          </div>
          <div className="video-container">
            <div className="container py-4">
              <div className="row">
                <div className="col-lg-8 push-lg-2">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="Markdown Previewer Video" className="embed-responsive-item" src="https://www.youtube.com/embed/n5JbaWBikQo" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
