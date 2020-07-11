import React from 'react';
import {Container} from 'react-bootstrap'
import Header from './components/header'
import './App.scss';


import Home from './pages/home'

function App() {
  return (
    <>
      <Container fluid>
        <Header />
        <Home />
      </Container>
    </>
  );
}

export default App;
