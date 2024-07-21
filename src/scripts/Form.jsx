import { useState } from 'react'
import '../styles/Form.css'
import { v4 as uuid } from "uuid"



function Form({addItem}){

    const [inputValue, setInputValue] = useState('');
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim() !== ''){
            const newItem = {
                id: uuid(),
                name: inputValue,
              };
            addItem(newItem);
        }
        setInputValue('');
    }

    return(
        <form className = "formForTask" onSubmit={handleSubmit}>
            <div className='formRow'>
                <label htmlFor='task'>New Task</label>
                <input 
                    type="text" 
                    id="taskInput" 
                    value = {inputValue} 
                    onChange= {(event)=>{setInputValue(event.target.value)}}>
                </input>
            </div>
            <button type="submit" className='addBtn'>Add</button>
        </form>
    )
}

export default Form