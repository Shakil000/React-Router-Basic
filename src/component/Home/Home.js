import React from 'react';
import { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
const [friends,setFriends] = useState([])

useEffect (() => {
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => setFriends(data))
},[])
    return (
        <div className="App">
      <header className="App-header">
        <h1>My Friends:{friends.length}</h1>
        {
          friends.map(friends => <Friend friend={friends}></Friend>)
        }
      </header>
    </div>
    );
};

export default Home;