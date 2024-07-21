import '../styles/TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons'; // Импорт иконки галочки

function TodoItem({item, deleteItem}){

    return(
        <div className='container'>
            <label className='label'>
                <input type='checkbox'className='checkbox'/>
                <span className='checkmark'>
                <FontAwesomeIcon icon={faCheck} />
                </span>
             {item.name}
            </label>
            <button 
                className='deleteBtn' 
                onClick={()=> deleteItem(item.id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
                Delete
            </button>
        </div>
    )
}

export default TodoItem