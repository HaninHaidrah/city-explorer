import React from "react";
import Card from "react-bootstrap/Card";

class Movie extends React.Component {
  render() {
    return (
      <div className="row">
        <h2 style={{textAlign:'center',marginTop:'4%',color:'GrayText',fontSize:'80px'}}>Top Movies</h2>
        {this.props.infoForLocation &&
          this.props.movieInfo.map((item) => {
            return (
              <div className="col-sm-4 py-2" >
                <div className="card card-body h-100 bg-#FDFAF6" >
                  <Card style={{backgroundColor:'#F6E6CB'}}>
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500${item.image_url}`}
                      alt="There is no poster"
                    />
                    <Card.Body>
                      <Card.Title>The Movie :{item.title}</Card.Title>
                      <Card.Text>
                      
                        <p>The overview:{item.overview}</p>
                        <p>The votes:{item.average_votes}</p>
                        <p>The release Time: {item.released_on}</p>
                        <p>The total.vote:{item.vote_count}</p>
                        <p>The popularity: {item.popularity}</p>
                        
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Movie;
