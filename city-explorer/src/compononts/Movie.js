import React from 'react';
import Card from "react-bootstrap/Card";

class Movie extends React.Component{
    render() {
    return (
      <div style={{display: 'inline-block' ,marginTop: '10px'}}>
        { this.props.infoForLocation &&
        this.props.movieInfo.map((item) => {
          return (
            <div style={{display:'inline-block'}}>
              <Card style={{ width: "18rem"}}>
               <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${item.image_url}`} alt="There is no poster" />
              <Card.Body> 
              <Card.Title>
                The Movie :{item.title}
              </Card.Title>
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
          );
        })}
        
      </div>
    );
  }
}



export default Movie;