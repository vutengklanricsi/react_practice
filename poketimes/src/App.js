import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

//npm installreact-router-dom - ezzel tudjuk a a komponenseket összekötni a Domban 
//14-es sorban a az exact szóval tudjuk azt megcsinálni, hogy  a többi komponensek ne töltsenek be a homera