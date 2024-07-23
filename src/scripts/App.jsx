import '../styles/App.css'
import TodoList from './TodoList'
import Form from './Form'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState(()=>{
    const savedItems = localStorage.getItem('todoList');
    return savedItems ? JSON.parse(savedItems) : [];
  })

  useEffect(() => {
    const todoList = localStorage.getItem('todoList');
    if(todoList){
      setItems(JSON.parse(todoList));
    }
  }, []); 

  useEffect(() => {
      localStorage.setItem('todoList', JSON.stringify(items));
    
  }, [items]);

  const addItem = (item)=>{
    const newItems = [...items, item];
    setItems(newItems);
    //localStorage.setItem('todoList', JSON.stringify(newItems));
  }

  const deleteItem = (id)=>{
    const newItems = items.filter(i => i.id !== id);
    setItems(newItems);
  }

  return(
    <div className='mainContainer'>
      
      <TodoList items={items} deleteItem={deleteItem}/>
      <Form addItem={addItem} />

    </div>
  )
}

export default App
