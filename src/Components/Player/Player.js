import react from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Player ({name,team,nationality,jerseyNumber,age,image}) {
    return (
        <>

     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
      <div>Name:{name}</div></Card.Title>
        <Card.Text>
       <div>Team : {team} </div>
       <div>Nationality: {nationality} </div>
       <div>JerseyNumber: {jerseyNumber} </div>
       <div>Age:{age}</div>
       
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        
        </>
    );
}

export default Player; 
