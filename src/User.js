import React, { Component } from 'react';

class Profile extends Component {
  state = {  }
  render() {
    const {users, profile, movies}=this.props;
    console.log(users[profile.userID])
    return (
      <div>
<div>{users[profile.userID].name}'s favourite movie is {movies[profile.favoriteMovieID].name}</div>
      </div>
    )
  }
}

export default Profile;