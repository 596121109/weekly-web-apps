import React, { Component } from 'react';
import './App.css';
import Header from './global_components/Header';
import Footer from './global_components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      descriptions: [],
      links: [],
      inputValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let queryStr = this.state.inputValue;
    let url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${queryStr}`;

    fetch(url).then(function (res) {
      return res.json();
    }).then(function(data) {
      this.setState({
          titles: data[1],
          descriptions: data[2],
          links: data[3]
      });
    }.bind(this));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container py-5">
          <div className="row">
            <form onSubmit={this.handleSubmit} className="form-inline mx-auto d-block">
              <div className="form-group">
                <input onChange={this.handleChange} className="form-control mx-sm-3" placeholder="Search Topic"></input>
                <button type="submit" className="btn btn-primary">Search</button>
              </div>
            </form>
          </div>
          {
            this.state.titles.map((title, i) =>
              <div className="row" key={i}>
                <div className="col-md-8 push-md-2">
                  <a className="results" href={this.state.links[i]} target="_blank">
                    <div className="card-block mt-4">
                      <h3 className="mb-3">{title}</h3>
                      <p>{this.state.descriptions[i]}</p>
                    </div>
                  </a>
                </div>
              </div>
            )
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
