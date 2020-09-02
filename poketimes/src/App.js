import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Post} /> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// Route parameter - 17-es sorban /:post_id csinálunk egy  változót

//npm installreact-router-dom - ezzel tudjuk a a komponenseket összekötni a Domban 
//14-es sorban a az exact szóval tudjuk azt megcsinálni, hogy  a többi komponensek ne töltsenek be a homera
// A 11-es sorban lévő browserrouter alá bármit hozzáadunk akkor hozzáadja azokat a propertieseket(Amikor propsokat adunk a komponensekhez)
//Ebben az esetben a Navbar nincs benne, viszont adhatunk neki magasabb rendú komponenst