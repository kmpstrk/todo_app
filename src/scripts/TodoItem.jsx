import { useState } from "react";

function TodoItem({item, deleteItem}){

    return(
        <div>
            <label className='label'>
                <input type='checkbox'className='checkbox'/> {item}
            </label>
            <button 
                className='deleteBtn' 
                onClick={()=> deleteItem(item)}>Delete</button>
        </div>
    )
}

export default TodoItem