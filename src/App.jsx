import { useState } from 'react'
import './App.css'

function App() {
  const [a, b] = useState("ababa")
  const [but, setButton] = useState(<button onClick={()=>b("asdf")}></button>)
  const buttonStyle = {
    backgroundColor: '#04AA6D',
    color: 'white',  // Optionally, you can set other styles like text color
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return(
    <div>
      <div>{a}</div>
      {but}
      <button onClick={()=>but.style=buttonStyle}></button>
      <div className='main'>
        <h1 className='header'>Todo List</h1>
      <ul className='listOfTasks'>
        <li>
          <label className='label'>
            <input type='checkbox'className='checkbox'/>
            Item 1
          </label>
          <button className='deleteBtn'>Delete</button>
        </li>

      </ul>
      </div>
      <hr></hr>
      
      <form className = "formForTask">
        <div className='formRow'>
        <label htmlFor='task'>New Task</label>
        <input type="text" id="task"></input>
        </div>
        <button className='addBtn'>Add</button>
      </form>
    </div>
  )
}

export default App
