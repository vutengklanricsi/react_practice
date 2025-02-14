import React, { Component } from 'react';

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value // Az id-val megkapjuk a hogy éppen melyik input mezőt használjuk
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNinja(this.state) // itt azért this.props mert classoknál így 
    // referálunk a propsokra, függvényeknék vagyis amikor propsot adunk át container componensekbe akkor paraméterként adjuk át őket
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={ this.handleChange } />
          <label htmlFor="name">Age: </label>
          <input type="text" id="age" onChange={ this.handleChange } />
          <label htmlFor="name">Belt: </label>
          <input type="text" id="belt" onChange={ this.handleChange } />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddNinja;
