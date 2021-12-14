import { useState } from 'react'

import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'buy shit',
            completed: true,
        },
        {
            id: 2,
            text: 'sell shit',
            completed: false,
        },
        {
            id: 3,
            text: 'profit from shit',
            completed: false,
        },
    ])

    const toggleTodo = (id) => {
        const newTodos = todos.map(todo => {
            if (id === todo.id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }

            return todo
        })

        setTodos(newTodos)
    }

    return (
        <div>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggle={toggleTodo} />
            ))}
        </div>
    )
}

export default TodoList
