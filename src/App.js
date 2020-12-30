import React from "react"

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
                <h1>Hello World!</h1>           {/*{this.props}*/}
            </div>
        )
    }
}

export default App