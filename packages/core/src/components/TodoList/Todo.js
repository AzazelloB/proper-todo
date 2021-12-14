import './style.css'

function Todo({ todo: { id, text, completed }, toggle }) {
    const handleChange = () => {
        toggle(id)
    }

    return (
        <div className="todo">
            <input id={`todo_${id}`} type="checkbox" checked={completed} onChange={handleChange} />
            <label htmlFor={`todo_${id}`} className={completed ? 'completed' : ''}>{ text }</label>
        </div>
    )
}

export default Todo
