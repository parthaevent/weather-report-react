import React, {Component, PropTypes} from 'react';
import Tooltip from 'react-tooltip';
import {getWeatherData} from '../../../utils/Weather-api';
import ReportListItems from './ReportListItems';

export default class Report extends Component {
  constructor() {
    super()
    this.state = {report: []}
  }

  getWeatherData() {
    const {city} = this.props.params;
    this.props.getWeatherData(city).then(report => {
        this.setState({report});
    });
  }

  render () {
    const {report} = this.state;
      return (
        <ul>
          {
              report && report.data && report.data.map((weather, index) => {
                if (weather) {
                  return <ReportListItems key={index} reportData={weather} />
                }
              })
          }
        </ul>
      );
  }

  componentWillMount() {
    this.getWeatherData();
  }
}

Report.propTypes = {
    city: PropTypes.string,
    getWeatherData: PropTypes.func
}
Report.defaultProps = {getWeatherData}
