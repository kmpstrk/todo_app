import '../styles/Form.css'


function Form(){
    return(
        <form className = "formForTask">
            <div className='formRow'>
                <label htmlFor='task'>New Task</label>
                <input type="text" id="task"></input>
            </div>
            <button className='addBtn'>Add</button>
      </form>
    )
}

export default Form