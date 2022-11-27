import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = (props) => {
    const [friends,setFriends] = useState({})
    //const {city} = friends
    useEffect(()=> {
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setFriends(data))
    },[])
    const {friendId} = useParams();
    return (
        <div>
            <h2>This is friend details component:{friendId}</h2> 
            <h1>Name:{friends.name}</h1>
            <h1>email:{friends.email}</h1>
            <h1>phone:{friends.phone}</h1>
            <h1>website:{friends.website}</h1>

 

        </div>
    );
};

export default FriendDetails;