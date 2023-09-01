import logo from './logo.svg';
import './App.css';
import { Card } from 'react-bootstrap';
import Player from './Components/Player/Player';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  const players = [


    {
      Name: "MESSI",
      Team: "Barcelone",
      Nationality: "Argentina",
      JerseyNumber: "9",
      Age: "33",
      Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/250px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg'
    },
    {
      Name: "Ronaldo",
      Team: "Real",
      Nationality: "Portuguese",
      JerseyNumber: "7",
      Age: "38",
      Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Cristiano_Ronaldo_WC2022_-_01.jpg/250px-Cristiano_Ronaldo_WC2022_-_01.jpg"
    },
    {
      Name: "Davids",
      Team: "Juvintise",
      Nationality: "Holland",
      JerseyNumber: "9",
      Age: "35",
      Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Edgar_Davids.jpg/250px-Edgar_Davids.jpg"
    },




    {
      Name: "MbappéS",
      Team: "PSG",
      Nationality: "France",
      JerseyNumber: "7",
      Age: "24",
      Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg/220px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg"
    },

  ];

  return (
    <Container>
      <Row>
 {players.map((player,key) =>(
        <Col>
          <Player key={key} name={player.Name} team={player.Team} nationality={player.Nationality} jerseyNumber={player.JerseyNumber} age={player.Age} image={player.Image} />
        </Col>
        ))}
      </Row>
    </Container>

  )
}


export default App;



