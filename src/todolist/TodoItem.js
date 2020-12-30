import React from "react"

function TodoItem(props) {
    return (
        <div>
            <input type="checkbox" checked={props.completed}/>
            <p>{props.text}</p>
        </div>
    )
}

export default TodoItem