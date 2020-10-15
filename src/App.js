import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import './App.scss';


import Home from 'pages/home'
import Browse from 'pages/browse'
import Dash from './dash'

function App() {
  return (
    <>
      <Container fluid>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/browse' component={Browse} />
            <Route path='/dash' component={Dash} />
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;
