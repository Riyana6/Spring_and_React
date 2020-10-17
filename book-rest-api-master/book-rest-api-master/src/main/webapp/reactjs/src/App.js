import React from 'react';
import { Container, Row ,Jumbotron} from 'react-bootstrap';

import './App.css';

import NavigationBar from './components/NavigationBar';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Container>
        <Row>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
          </Jumbotron>
        </Row>
      </Container>
    </div>
  );
}

export default App;
