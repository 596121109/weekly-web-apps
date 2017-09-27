import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './global_components/Header.js';
import Footer from './global_components/Footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://talaikis.com/api/quotes/random/',
      quote: '',
      author: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleTweetClick = this.handleTweetClick.bind(this);
  }

  componentDidMount() {
    fetch(this.state.url).then(function(response) {
      return response.json();
    }).then(function(data) {
      this.setState({
        quote: data.quote,
        author: data.author
      });
    }.bind(this));
  }

  handleClick() {
    fetch(this.state.url).then(function(response) {
      return response.json();
    }).then(function(data) {
      this.setState({
        quote: data.quote,
        author: data.author
      });
    }.bind(this));
  }

  handleTweetClick() {
    window.open(`https://twitter.com/intent/tweet?text="${this.state.quote}" — ${this.state.author}`)
  }

  render() {
    const quoteStyle = {
      backgroundColor: '#fff',
      border: '1px solid #dddfe2',
      borderRadius: 4,
      margin: 0,
      padding: 15,
    };

    return (
      <div>
        <Header />
        <div className="App container">
          <div className="row">
            <div className="col-md-6 push-md-3">
              <blockquote style={quoteStyle} className="text-center my-5">
                <q>{this.state.quote}</q>
                <p id="name">— <b>{this.state.author}</b></p>
              </blockquote>
              <div className="mb-5 mx-auto d-block btn-group" role="group">
                <button
                  onClick={this.handleClick}
                  className="btn btn-primary"
                >New Quote</button>
                <button
                  onClick={this.handleTweetClick}
                  className="btn btn-primary"
                ><i className="fa fa-twitter" aria-hidden="true"></i> Tweet</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
