import React, { Component } from 'react';
import AppHeading from './AppHeading';
import UnitSwitch from './UnitSwitch';
import AppDetails from './AppDetails';
import SubmitForm from './SubmitForm';
import api from '../api.json';

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `http://api.wunderground.com/api/${api.key}/conditions/q/newyork,ny.json`,
      inputValue: '',
      unitValue: 'F',
    }
    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getData() {
    let url = this.state.url;
    fetch(url).then(function(res) {
      return res.json();
    }).then(function(data) {
      this.setState({
        location: data.current_observation.display_location.full,
        date: data.current_observation.observation_time.substr(16),
        weather: data.current_observation.weather,
        icon: data.current_observation.icon_url,
        tempF: Math.round(data.current_observation.temp_f),
        tempC: Math.round(data.current_observation.temp_c),
        humidity: data.current_observation.relative_humidity,
        windMPH: data.current_observation.wind_mph,
        windDegree: data.current_observation.wind_degrees,
        precipitation: data.current_observation.precip_today_metric,
        uv: data.current_observation.UV,
        errorMsg: '',
      });
    }.bind(this)).catch(function(error) {
      this.setState({
        errorMsg: 'Please, enter a valid city and state, or zip code.'
      });
    }.bind(this));
  }

  componentDidMount() {
    this.getData();
    navigator.geolocation.getCurrentPosition(function(position) {
      this.setState({
        url: `http://api.wunderground.com/api/${api.key}/conditions/q/${position.coords.latitude},${position.coords.longitude}.json'`
      }, () => {
        this.getData();
      });
    }.bind(this));
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      url: `http://api.wunderground.com/api/${api.key}/conditions/q/${this.state.inputValue}.json`,
    }, () => {
      this.getData();
    });
  }

  handleClick(e) {
    this.setState({
      unitValue: e.target.id,
    });
  }

  render() {
    return(
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 push-md-3 col-xl-4 push-xl-4 card-block">
            <div className="d-flex justify-content-between">
              <AppHeading {...this.state} />
              <UnitSwitch handleClick={this.handleClick} />
            </div>
            <AppDetails {...this.state} />
            <SubmitForm
              {...this.state}
              change={this.handleChange}
              submit={this.handleSubmit}
            />
            <p className="text-danger text-center mt-2">{this.state.errorMsg}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherApp;
