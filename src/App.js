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

    constructor() {
        super();
        this.state = {
            name: "Vinayak",
            age: 24
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}

export default App