import React from "react"
import ConditionalRenderingPractice from "./conditional_rendering/ConditionalRenderingPractice";

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
                <ConditionalRenderingPractice/>
            </div>
        )
    }
}

export default App