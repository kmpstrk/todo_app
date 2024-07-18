
function TodoItem({item}){
    return(
        <div>
            <label className='label'>
                <input type='checkbox'className='checkbox'/> {item}
            </label>
            <button className='deleteBtn'>Delete</button>
        </div>
    )
}

export default TodoItem