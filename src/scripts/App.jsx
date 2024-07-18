import '../styles/App.css'
import TodoList from './TodoList'
import Form from './Form'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item)=>{
    setItems([...items, item]);
  }

  return(
    <div>

      <TodoList items={items} />

      <hr></hr>
      
      <Form addItem={addItem} />

    </div>
  )
}

export default App
