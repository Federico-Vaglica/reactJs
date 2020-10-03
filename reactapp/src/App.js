import React from 'react';
import Post from './FacebookPost';


function App(){
  return (
    <div className='container'>
      <Post author='Federico' description='Good morning React'/>
      <Post author='Marta' description='Hello Everybody'/>
      <Post author='Lisa' description='React is nice'/>
    </div>
  )
};

export default App;