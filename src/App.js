import React from "react"
import FormSubmit from "./forms/FormSubmit";

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
                <FormSubmit/>
            </div>
        )
    }
}

export default App