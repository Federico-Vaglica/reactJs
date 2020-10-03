import React, { useState } from 'react';


import Post from './FacebookPost';


function App(){

  // const [count, setCount] = useState(5);
  // const incrementNumber = () => {
  //   setCount(count + 1)
  // }
  // const decrementNumber = () => {
  //   setCount(count - 1)
  // }
  //   return (
  //     <div className='container'>
  //       <h4>Counter: {count}</h4>
  //       <button onClick={incrementNumber}>Aumenta</button>
  //       <button onClick={decrementNumber}>Decrementa</button>
  //     </div>
  //   )

  const [posts, setPost] = useState([
    {author: "Federico" , description: "React is powerFull"},
    {author: "Marta" , description: "React is awesome"},
    {author: "Lisa" , description: "Hello Everybody"}
  ])

  return (
    <div className="container">
      {posts.map((post,index) =>(
        <Post key = {index} author ={post.author} description = {post.description}/>
      ))}
    </div>
  )
}

export default App;