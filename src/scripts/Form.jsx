import { useState } from 'react'
import '../styles/Form.css'


function Form({addItem}){

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        addItem(inputValue);
        setInputValue('');
    }

    return(
        <form className = "formForTask" onSubmit={handleSubmit}>
            <div className='formRow'>
                <label htmlFor='task'>New Task</label>
                <input 
                    type="text" 
                    id="task" 
                    value = {inputValue} 
                    onChange= {(event)=>{setInputValue(event.target.value)}}>
                </input>
            </div>
            <button type="submit" className='addBtn'>Add</button>
        </form>
    )
}

export default Form