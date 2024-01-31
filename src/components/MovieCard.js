import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './MovieCard.css'


const movieCard = ({movie}) => {
  return (
    <CardGroup class = "Card">
        
        <Card style={{   width: '20rem', height : '50rem',margin: '5px' }}>
           <Card.Img style={{width : '20rem', height: '30rem' }} variant="top" src={movie.posterUrl} alt={movie.name} />
            <Card.Body >
                <Card.Title style={{textAlign: 'center', fontSize : '20px', fontWeight: 'bold', margin:'20px' }}>{movie.title}</Card.Title>
                <Card.Text style={{textAlign:'left',width:'18rem',height:'10rem'}}>
                <p >Description: {movie.description}</p> 
                </Card.Text>
                  
                  <Card.Text>  
                  {/* <p>Trailer: {movie.trailer}</p>   */}
                  <p>Rate: {movie.rate}</p> 
                </Card.Text>
            </Card.Body>
          </Card>
        
      
    
      </CardGroup>
);
};



// function movieCard(props) {
//     return (
//       <CardGroup class = "Card">
          
//           <Card style={{   width: '18rem', height : '28rem',margin: '10px' }}>
//             {/* <Card.Img variant="top" src={props.image} alt={props.name} /> */}
//               <Card.Body>
//                   <Card.Title>{props.title}</Card.Title>
//                   <Card.Text>
//                     <p >Description:</p> {props.description}<br />
//                     <p>Rate:</p> {props.rate} <br />
//                     <p>PosterUrl</p>:{props.posterUrl} <br />
//                     <p>Trailer:</p> {props.trailer} <br />
//                   </Card.Text>
//               </Card.Body>
//             </Card>
          
        
      
//         </CardGroup>
// );
// };
 

export default movieCard;