import React from "react"

import TodoItem from "./todolist/TodoItem"
import todoData from "./todolist/TodoData"

function App() {

    let todoComponents = todoData.map(item =>
        <TodoItem
            key={item.id}            //some unique id
            text={item.text}
        />
    )

    return (
        <div>
            {todoComponents}
        </div>
    )
}

export default App