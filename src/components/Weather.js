import React, {Component} from 'react';
import {fetchDataAsync} from '../actions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { actions } from '../index'
import { List } from 'immutable'

class Weather extends Component {
  constructor(props) {
    super(props);
    this.props.fetchWeather();
    console.log('actions', actions);
    //actions.updateIn(['user', 'age'], v => 23)
    //actions.updateIn(['posts', 'first', 'title', 'en'], v => v.toUpperCase())
    //actions.mergeDeepIn(['list', 'data'], List([5, 12, 34]))
//    actions.mergeDeepIn(['posts', 'first'], {
//        title: {
//          en: 'TITLE2'
//        },
//        text: 'Lorem ipsum 2'
//    })
  }

  handleClick() {
    actions.mergeDeepIn(['user', 'name'], {firstName: 'persist'})
  }

  render() {
    console.log(this.props.weather);
    return (
        (typeof this.props.weather.name != 'undefined') ?
        <div>
          <h2>Weather</h2>
          <p>City Name: {this.props.weather.name}</p>
          <p>Description: {this.props.weather.weather[0].description}</p>
          <img src={`http://openweathermap.org/img/wn/${this.props.weather.weather[0].icon}@2x.png`}
               alt="Weather icon"/>
          <p>Temprature: {this.props.weather.main.temp}F</p>
          <p>Humidity: {this.props.weather.main.humidity}%</p>
          <button type="button" onClick={this.handleClick}>Click Me!</button>
        </div>
     : <div>Loading...</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWeather: bindActionCreators(fetchDataAsync, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.fetchData.get('data')
  }
};

Weather.propTypes = {
  weather: PropTypes.object.isRequired,
  fetchWeather: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
