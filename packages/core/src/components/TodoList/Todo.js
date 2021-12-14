import './style.css'

function Todo({ todo: { id, text, completed }, toggle }) {
    const handleClick = () => {
        toggle(id)
    }

    return (
        <div className="todo">
            <input id={`todo_${id}`} type="checkbox" checked={completed} onClick={handleClick} />
            <label htmlFor={`todo_${id}`} className={completed ? 'completed' : ''}>{ text }</label>
        </div>
    )
}

export default Todo
