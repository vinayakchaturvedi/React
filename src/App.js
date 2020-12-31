import React from "react"
import todoData from "./todolist/TodoData"
import TodoItem from "./todolist/TodoItem";

/*function App() {          //functional component

    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    )
}*/

class App extends React.Component {

    render() {
        const todoComponents = todoData.map(
            item => <TodoItem
                item = {item}
            />
        )

        return (
            <div>
                {todoComponents}
            </div>
        )
    }
}

export default App