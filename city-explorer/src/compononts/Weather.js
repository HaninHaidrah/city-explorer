import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        { this.props.infoForLocation &&
        this.props.weatherInfo.map((item) => {
          return (
            <div>
              <p>The date:{item.date}</p>
              <p>The weather:{item.description}</p>
            </div>
          );
        })}
        
      </div>
    );
  }
}

export default Weather;
