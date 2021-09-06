import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "@restart/ui/esm/Button";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLocation: "",
      outPutResult: "",
      errorAlert:'',
      infoForLocation:false,
    };
  }

  saveTheInput = (e) => {
    console.log("hi");
    this.setState({
      inputLocation: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONKEY}&q=${this.state.inputLocation}&format=json`;
    console.log(url);

    const output = await axios.get(url);
    console.log(output);

    this.setState({
       outPutResult: output.data[0] ,
       infoForLocation:true,
       errorAlert:false
    });}

    catch(err){
      this.setState({
        errorAlert:err.message
      })
      console.log(this.state.errorAlert)

    }

    // const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONKEY}&center=${this.state.outPutResult.lat},${this.state.outPutResult.lon}&zoom=1-18`;

    // const mapImage = await axios.get(mapUrl);

    // this.setState({ urlImage: mapUrl });

    // console.log(mapUrl);
    // console.log(mapImage);
  };

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
        
      </div>
    );
  }
}

export default App;
