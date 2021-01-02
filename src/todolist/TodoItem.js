import React from "react"

function TodoItem(props) {
    let completedStyle = {
        color: "gray",
        fontStyle: "italic",
        textDecoration: "line-through"
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle : null}>
                {props.item.text}
            </p>
        </div>
    )
}

export default TodoItem