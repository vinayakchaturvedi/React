import React from "react"
import ConditionalRender2 from "./conditional_rendering/ConditionalRender2";

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
                <ConditionalRender2/>
            </div>
        )
    }
}

export default App