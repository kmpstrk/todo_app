import { useState } from 'react'
import '../styles/App.css'
import TodoList from './TodoList'
import Form from './Form'

function App() {
  return(
    <div>

      <TodoList />

      <hr></hr>
      
      <Form />

    </div>
  )
}

export default App
