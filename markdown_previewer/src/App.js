import React, { Component } from 'react';
import Header from './global_components/Header';
import Footer from './global_components/Footer';
import Container from './components/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
