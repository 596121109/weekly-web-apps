import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './global_components/Header';
import Footer from './global_components/Footer';
import WeatherApp from './components/WeatherApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WeatherApp />
        <Footer />
      </div>
    );
  }
}

export default App;
