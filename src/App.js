import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/header'
import './App.scss';


import Home from 'pages/home'
import Browse from 'pages/browse'

function App() {
  return (
    <>
      <Container fluid>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/browse' component={Browse} />
          </Switch>
        </Router>

      </Container>
    </>
  );
}

export default App;
