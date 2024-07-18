import '../styles/TodoList.css'
import TodoItem from './TodoItem'

function TodoList({items}){
    return(
    <div className='main'>
        
        <h1 className='header'>Todo List</h1>

        
        <ul className='listOfTasks'>
            {items.map((item, index) => <li key = {index}> <TodoItem item = {item} /> </li> )}
        </ul>

    </div>
    )
}

export default TodoList