import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const [mobile,setMobile] = useState(' ');
    const {name,email,phone,id} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        history.push(`/friend/${friendId}`)
    }
    const addStyle={border:'1px solid red',
    borderRadius:'15px',
    margin:'10px',
    padding:'10px'
}

const showPhone = () => {
    setMobile(phone);
    }
    return (
        <div style={addStyle}>
            {/* <p>Id: {id}</p> */}
            <h2>Name:{name}</h2>
            <h2>Email:{email}</h2>
            <h2>Phone:{mobile}</h2>
            <button onClick={() => showPhone(mobile)}>Show Phone</button>
            <p><Link to={`/friends/${id}`}>
            <button onClick={() => handleClick(id)}>User Details </button>
            </Link></p>
        </div>
    );
};

export default Friend;