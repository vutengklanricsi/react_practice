import React, { Component } from 'react';
import axios from 'axios'

class Post extends Component {
  state = {
    post: null,
  }
  componentDidMount() {
    // console.log(this.props);
    // console.log(this.props.match.params.post_id)
    let id = this.props.match.params.post_id // Route-Parameters így kapjuk meg az id-t
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(response => {
        this.setState({
          post: response.data
        })
      })
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    )
    return(
      <div className="container">
        {post}
      </div>
    )
  }
}

export default Post
