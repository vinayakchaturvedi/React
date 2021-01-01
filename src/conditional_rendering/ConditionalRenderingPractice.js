import React from "react"

class ConditionalRenderingPractice extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleChangeState = this.handleChangeState.bind(this)
    }

    handleChangeState() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        return (
            <div>
                <div>
                    User is currently logged {this.state.isLoggedIn ? "in" : "out"}
                </div>
                <div>
                    <button onClick={this.handleChangeState}>
                        Log {!this.state.isLoggedIn ? "in" : "out"}
                    </button>
                </div>
            </div>
        )
    }
}

export default ConditionalRenderingPractice