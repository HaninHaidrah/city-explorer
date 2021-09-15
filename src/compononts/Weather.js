import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'
class Weather extends React.Component {
  render() {
    return (
      <div style={{marginLeft:'48%',marginTop:'3%'}}>
        
            
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor:'rgb(158, 119, 119)',width:'200px',height:'50px'}}> WeatherForcast
              </Dropdown.Toggle>

             <Dropdown.Menu>
             { this.props.infoForLocation &&
               this.props.weatherInfo.map((item) => {
          return (
             <Dropdown.Item >
              The date:{item.date}
              The weather:{item.description}</Dropdown.Item>
            )
            
          
        })}
             </Dropdown.Menu>
            </Dropdown>
      </div>
    );
  }
}




export default Weather;
