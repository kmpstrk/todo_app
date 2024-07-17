import '../styles/TodoList.css'
import TodoItem from './TodoItem'

function TodoList(){
    return(
    <div className='main'>
        
        <h1 className='header'>Todo List</h1>
       
        <ul className='listOfTasks'>
            <li> <TodoItem /> </li>
        </ul>

    </div>
    )
}

export default TodoList