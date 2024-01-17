import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(0);
  const [currTodo, setCurrTodo] = useState({
    id: id,
    title: '',
    description: '',
    completed: false,
  });

  const HandleInput = (e) =>{
    setCurrTodo({
      ...currTodo,
      //[e.target.name] is used to dynamically update object property (when the name of the property is unknown upfront but runtime).
      [e.target.name]:e.target.value
    });
  };

  const addTodo = (e) => {
    setId(id +1);
    setCurrTodo({
      ...currTodo,
      id: id+1,
    });
    setTodo([...todo, currTodo]);
  };

  const HandleOnClick = (id) =>{
    setTodo((prevTodo)=> prevTodo.filter((todo)=>todo.id !== id));
  };

  return (
    <div>
      <input type="text" name='title' placeholder='Title' onChange={HandleInput} /><br/><br/>
      <input type="text" name='description' placeholder='Description' onChange={HandleInput} /> <br/><br/>
      <button onClick={addTodo}> Add Todo</button>
      <div>
      {todo.length > 0 && todo.map((todo, idx)=>{
        return (
        <div key={idx}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button onClick={()=>HandleOnClick(todo.id)}> Mark as Done</button>
        </div>
      )})}
      </div>

    </div>
  )
}


export default App
