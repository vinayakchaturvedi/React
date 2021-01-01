import React from "react"
import ConditionalRender from "./conditional_rendering/ConditionalRender";

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
                <ConditionalRender/>
            </div>
        )
    }
}

export default App