import React from "react"
import FormPart1 from "./forms/FormPart1";

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
                <FormPart1/>
            </div>
        )
    }
}

export default App