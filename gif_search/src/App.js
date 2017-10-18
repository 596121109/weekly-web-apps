import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row } from 'react-bootstrap';
import FormField from './components/FormField';
import Output from './components/Output';
import Loading from './components/Loading';
import Error from './components/Error';
import Header from './global_components/Header';
import Footer from './global_components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: 'https://api.tenor.com/v1/trending?limit=48&key=LIVDSRZULELA',
      gifs: [],
      inputValue: '',
      loading: true,
      title: '',
      hasError: false,
      errMsg: 'An unknown error has occurred.',
    }
  }

  getData = (url) => {
    axios.get(url)
      .then(res => {
        if (!res.data.error) {
          this.setState({
            gifs: res.data.results,
            loading: false,
          });
        } else {
          this.setState({
            hasError: true,
            title: '',
            loading: false,
            errMsg: res.data.error.toUpperCase() + '.',
          });
        }

        if (res.data.results.length === 0) {
          this.setState({
            hasError: true,
            loading: false,
            errMsg: 'There are no results for your search.',
          });
        }
      });
  }

  componentDidMount() {
    this.getData(this.state.url);
    this.setState({
      loading: true,
      hasError: false,
      title: 'Trending GIFs',
    });
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let queryTerm = this.state.inputValue;
    this.setState({
      url: `https://api.tenor.com/v1/search?q=${queryTerm}&limit=48&key=LIVDSRZULELA`,
      loading: true,
      hasError: false,
      title: `Search results for "${queryTerm.toLowerCase()}"`,
    }, () => {
      this.getData(this.state.url);
    });
    e.target.reset();
  }

  render() {
    return (
      <div>
        <Header/>
          <Grid className="py-3">
            <FormField
              submit={this.handleSubmit}
              change={this.handleChange}
            />
            <h3 className="text-center pb-3">{this.state.title}</h3>
            <Row>
              {
                this.state.loading ?
                <Loading /> :
                this.state.hasError ?
                <Error msg={this.state.errMsg}/> :
                this.state.gifs.map(gifData =>
                  <Output
                    key={gifData.id}
                    link={gifData.url}
                    src={gifData.media[0].tinygif.url}
                  />
                )
              }
            </Row>
          </Grid>
        <Footer/>
      </div>
    );
  }
}

export default App;
