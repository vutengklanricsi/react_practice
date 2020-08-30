import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
import './Ninjas.css'

class App extends Component {
    state = {
      ninjas : [
        { name: 'Ryu', age: 21, belt: 'black', id: 1},
        { name: 'Yoshi', age: 23, belt: 'yellow', id: 2},
        { name: 'Naruto', age: 26, belt: 'green', id: 3}
      ]
    }
    addNinja = (ninja) => {
      ninja.id = Math.random();
      let ninjas = [...this.state.ninjas, ninja];
      this.setState({
        ninjas: ninjas
      })
    }
    deleteNinja = (id) => {
      let ninjas = this.state.ninjas.filter(ninja => {
        return ninja.id !== id
      })
      this.setState({
        ninjas: ninjas
      })
    }
    componentDidMount() {
      console.log('Component mounted');
    }
    componentDidUpdate(prevProps, prevState) {
      console.log('Component updated');
      console.log(prevProps, prevState);
    }
    render() {
      return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja = {this.deleteNinja} ninjas = { this.state.ninjas } />
        <AddNinja addNinja = {this.addNinja}/>
      </div>
    )
  }
}

export default App;
// Az App componens a root komponens a reactben. a Root komponens az anya komponens ami főkomponens 
// Ebbe az Root componensbe ágyazzuk be a többi komponenst 