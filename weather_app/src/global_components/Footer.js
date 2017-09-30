import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <footer className="text-muted">
        <div className="container text-center">
          <p><a href="http://www.weeklywebapps.com">Weekly Web Apps</a> by <a href="http://jwhwebdevelopment.com" target="_blank" rel="noopener noreferrer">JWH Web Development</a>.</p>
          <p>Visit me at <a href="https://github.com/jwilliamhall" target="_blank" rel="noopener noreferrer">GitHub</a> for all my source code.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
