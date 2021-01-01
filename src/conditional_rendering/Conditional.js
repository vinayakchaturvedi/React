import React, {Component} from "react"

class Conditional extends Component {

    render(props) {
        return (
                <h1>{this.props.isLoading ? "Loading..." : "Loaded"}</h1>
        )
    }
}

export default Conditional