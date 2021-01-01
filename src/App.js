import React from "react"
import ChangeState from "./state/ChangeState.js"

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
                <ChangeState />
            </div>
        )
    }
}

export default App