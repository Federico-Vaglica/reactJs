import React from 'react';
// import Post from './FacebookPost';


class App extends React.Component{
  state = {
    number: 0,
  }

  incrementNumber= () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  decrement = () => {
    this.setState({
      number: this.state.number - 1
    })
  }
  render(){
    return (
      <div className='container'>
        {/* <Post author='Federico' description='Good morning React'/>
        <Post author='Marta' description='Hello Everybody'/>
        <Post author='Lisa' description='React is nice'/> */}
        <h4>Counter: {this.state.number}</h4>
        <button onClick={this.incrementNumber}>Aumenta</button>
        <button onClick={this.decrement}>Decrementa</button>
      </div>
    )
  }

};

export default App;