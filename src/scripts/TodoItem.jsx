import '../styles/TodoItem.css'

function TodoItem({item, deleteItem}){

    return(
        <div className='checkboxContainer'>
            <label className='label'>
                <input type='checkbox'className='checkbox'/> {item.name}
            </label>
            <button 
                className='deleteBtn' 
                onClick={()=> deleteItem(item.id)}>Delete</button>
        </div>
    )
}

export default TodoItem