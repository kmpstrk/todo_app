import '../styles/TodoList.css'
import TodoItem from './TodoItem'

function TodoList({items, deleteItem}){
    
    return(
    <div className='main'>
        
        <h1 className='header'>Todo List</h1>

        {items.length === 0 ? (
        <p>No tasks yet...</p>) 
        : 
        (
            <ul className='listOfTasks'>
                {items.map((item) => <li key = {item.id}> <TodoItem item = {item} deleteItem={deleteItem} /> </li> )}
            </ul>
        )}

    </div>
    )
}

export default TodoList