import React from "react"
import Header from "./meme-generator/Header";
import MemeGenerator from "./meme-generator/MemeGenerator";

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
                <Header/>
                <MemeGenerator/>
            </div>
        )
    }
}

export default App