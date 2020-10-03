import React from 'react';
import './App.css';

function Post(props){


    return(
        <div  className="Post">
            <h2>{props.author}</h2>
            <h4>{props.description}</h4>
            <button className="pointer">Like</button>
        </div>
    )
}

export default Post;