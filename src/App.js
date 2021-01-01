import React from "react"
import StateExample from "./state/StateExample";

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
                <StateExample/>
            </div>
        )
    }
}

export default App