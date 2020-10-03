import React, { useState } from 'react';


// import Post from './FacebookPost';


function App(){
  // incrementNumber= () => {
  //   this.setState({
  //     number: this.state.number + 1
  //   })
  // }

  // decrement = () => {
  //   this.setState({
  //     number: this.state.number - 1
  //   })
  // }

  const [count, setCount] = useState(5);
  const incrementNumber = () => {
    setCount(count + 1)
  }
  const decrementNumber = () => {
    setCount(count - 1)
  }
    return (
      <div className='container'>
        <h4>Counter: {count}</h4>
        <button onClick={incrementNumber}>Aumenta</button>
        <button onClick={decrementNumber}>Decrementa</button>
      </div>
    )

};

export default App;