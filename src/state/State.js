import React from "react"

class State extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return (
            <div>
                <h1>
                    You are currently logged {this.state.isLoggedIn ? "in" : "out"}
                </h1>
            </div>
        )
    }
}

export default State