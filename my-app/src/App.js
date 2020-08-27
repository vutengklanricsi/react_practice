import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
    state = {
      ninjas : [
        { name: 'Ryu', age: 21, belt: 'black', id: 1},
        { name: 'Yoshi', age: 23, belt: 'yellow', id: 2},
        { name: 'Naruto', age: 21, belt: 'green', id: 3}
      ]
    }
    render() {
      return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome</p>
        <Ninjas ninjas = { this.state.ninjas } />
      </div>
    )
  }
}

export default App;
// Az App componens a root komponens a reactben. a Root komponens az anya komponens ami főkomponens 
// Ebbe az Root componensbe ágyazzuk be a többi komponenst 