import React, {PropTypes, Component} from 'react';

export default ReportListItems;

function ReportListItems({reportData}) {
  return (
    <li className="border-bottom">
      City: <strong>{reportData.name}</strong><br />
      humidity: <strong>{reportData.main.humidity}</strong><br />
      Pressure: <strong>{reportData.main.pressure}</strong><br />
      Temp: <strong>{reportData.main.temp}</strong><br />
      Temp Max: <strong>{reportData.main.temp_max}</strong><br />
      Temp Min: <strong>{reportData.main.temp_min}</strong><br />
    </li>
  );
}

ReportListItems.propTypes = {
  reportData: PropTypes.shape({
    name: PropTypes.string,
    main: {
      humidity: PropTypes.number,
      pressure: PropTypes.number,
      temp: PropTypes.number,
      temp_max: PropTypes.number,
      temp_min: PropTypes.number,
    }
  }),
};

ReportListItems.defaultProps = {
  reportData: {},
};

