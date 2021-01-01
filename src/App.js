import React from "react"
import RenderTodo from "./todolist/RenderTodo";

/*function App() {          //functional component

    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    )
}*/

class App extends React.Component {

    render() {

        return (
            <div>
                <RenderTodo/>
            </div>
        )
    }
}

export default App