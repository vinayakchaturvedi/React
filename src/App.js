import React from "react"
import Greet from "./class-based-components/Greet";

/*function App() {          //functional component

    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    )
}*/

class App extends React.Component {             //class based component

    render() {
        return (
            <div>
                <Greet />
            </div>
        )
    }
}

export default App