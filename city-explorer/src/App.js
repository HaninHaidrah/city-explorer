import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Weather from "./compononts/Weather";
import Movie from "./compononts/Movie";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLocation: "",
      outPutResult: "",
      errorAlert:'',
      infoForLocation:false,
      WeatherInfo:'',
      movieInfo:''
    };
  }

  saveTheInput = (e) => {
    this.setState({
      inputLocation: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try{   

    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONKEY}&q=${this.state.inputLocation}&format=json`;
    const output = await axios.get(url);

    const weatherUrl=`${process.env.REACT_APP_SERVER}/weather?city=${this.state.inputLocation}`
    const getInfo= await axios.get(weatherUrl);

    const movieUrl=`${process.env.REACT_APP_SERVER}/movies?city=${this.state.inputLocation}`
    const getMovies= await axios.get(movieUrl)

    this.setState({
       outPutResult: output.data[0] ,
       infoForLocation:true,
       errorAlert:false,
       WeatherInfo:getInfo.data,
       movieInfo:getMovies.data
     }) 
   }
  

    catch(err){
      this.setState({
        errorAlert:err.message
      })

    }
  }  

  render() {
    return (
      <div>
        <Form >
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              onChange={this.saveTheInput}
              placeholder="Enter The Location You want to explore"
            />
            <Form.Text className="text-muted">enjouy our app </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Explore
          </Button>
        </Form>

        {this.state.errorAlert &&

          <Alert  variant='warning'>
            {this.state.errorAlert} check it out!
          </Alert>
        }

       {
         this.state.infoForLocation &&

        <Card style={{ width: "50%" }}>
          <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONKEY}&center=${this.state.outPutResult.lat},${this.state.outPutResult.lon}&zoom=1-18`} style={{ width: "50%" }} />
          <Card.Body>
            <Card.Title>
              The Location :{this.state.outPutResult.display_name}
            </Card.Title>
            <Card.Text>
              <p>latitude: {this.state.outPutResult.lat}</p>
              <p>longitude: {this.state.outPutResult.lon}</p>
            </Card.Text>
            <Button variant="primary">Enjoy</Button>
          </Card.Body>
        </Card>
        }

        <Weather
        weatherInfo={this.state.WeatherInfo}
        infoForLocation={this.state.infoForLocation}/>
       <Movie  
       movieInfo={this.state.movieInfo}
       infoForLocation={this.state.infoForLocation}
       />
        
      </div>
    );
  }
}


export default App;
