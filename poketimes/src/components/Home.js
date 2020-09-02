import React, { Component } from 'react';
import axios from 'axios';
import ColorPractice from './hoc/ColorPractice';
import {Link} from 'react-router-dom'

class Home extends Component {
  state = {
    posts: [],
  }
  componentDidMount() { // componentDidMount 
    axios.get('https://jsonplaceholder.typicode.com/posts') // adatot szedd ki az url-ből és egy asynchronus művelet.
    //Ami azt Jelenti, hogy időbe telik neki míg visszatér egy válasszal
    // egy promise-al fog visszatérni - ez azt jelenti, hogy valamikor a jövőben be fog teljesülni.
      .then(response => {
        console.log(response.data)
        this.setState({
          posts: response.data.slice(0, 10)
        })
      }) // then akkor fog aktiválódni, ha a get lekérés befejeződött. Minden olyan kód amit a .then method-ban futtatunk.
      //a then methodban átadunk egy callback function-t ami aktviválódik,ha befejeződött és az a callback function
      // fogja a response objectet és amit a get kérésből nyert ki.
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
        posts.map((post) => {
          return(
            <div className="post card" key={post.id}>
              <div className="card-content">
              <Link to={'/'+post.id}>
                <span className="card-title">
                  {post.title}
                </span>
              </Link>
              </div>
            </div>
          )
        })
    ) : (
      (
        <div className="center">No posts yet</div>
      )
    )
    return(
      <div className="container">
        <h4 className="center">Home Page</h4>
        {postList}
      </div>
    )
  }
}

export default ColorPractice(Home);

//31th Route parameter - 30-as sorban a link to-val adjuk meg az id-t