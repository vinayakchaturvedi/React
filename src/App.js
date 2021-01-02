import React from "react"
import Fetch from "./fetch-data-using-api/Fetch";

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
                <Fetch/>
            </div>
        )
    }
}

export default App