import '../styles/App.css'
import TodoList from './TodoList'
import Form from './Form'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item)=>{
    setItems([...items, item]);
  }

  const deleteItem = (id)=>{
    const newItems = items.filter(i => i.id !== id);
    setItems(newItems);
  }

  return(
    <div>
      
      <TodoList items={items} deleteItem={deleteItem}/>

      
      <Form addItem={addItem} />

    </div>
  )
}

export default App
