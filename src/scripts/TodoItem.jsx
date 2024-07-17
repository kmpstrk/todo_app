
function TodoItem(){
    return(
        <div>
            <label className='label'>
                <input type='checkbox'className='checkbox'/>Item 1
            </label>
            <button className='deleteBtn'>Delete</button>
        </div>
    )
}

export default TodoItem