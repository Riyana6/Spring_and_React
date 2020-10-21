import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Book from './components/Book';
import BookList from './components/BookList';
import UserList from './components/UserList';


export default function App() {
  const marginTop = {
    marginTop:"20px"
  };

  const heading = "Welcome to Book Shop";
  const desc = " Good Friends, Good Books, and a sleepy conscience: this is the ideal life."

  return (
    <Router>
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={() => <Welcome heading={heading} desc={desc}/>}/>
              <Route path="/add" exact component={Book}/>
              <Route path="/edit/:id" exact component={Book}/>
              <Route path="/list" exact component={BookList}/>
              <Route path="/users" exact component={UserList}/>
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Router>
  );
}


