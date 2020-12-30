import React from "react"
import State from "./state/State"

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
                <State />
            </div>
        )
    }
}

export default App