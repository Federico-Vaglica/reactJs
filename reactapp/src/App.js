import React, {useState,useRef} from 'react';
import TodoList from './TodoList'
import uuidv4 from 'uuid/dist/v4'

function App() {
  const [todo,setTodos] = useState ([])
  const todoNameRef = useRef()
  function handleAddTodo(){
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id:uuidv4(),name:name,complete: false}]
    })
    console.log(name)
    todoNameRef.current.value  = null

  }
  return (
    <div className="App">
      <>
        <TodoList todos={todo}/>
        <input ref={todoNameRef} type="text"/>
        <button onClick={handleAddTodo}>Add Todo</button>
        <button>Cleat Completed todo</button>
        <div>0 left todo</div>
      </>
    </div>
  )
}

export default App;