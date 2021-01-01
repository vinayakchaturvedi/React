import React from "react"

class ConditionalRender2 extends React.Component {

    constructor() {
        super();
        this.state = {
            messages: ["a", "b"]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.messages.length > 0 &&
                    <h1>
                        You have {this.state.messages.length} unread messages
                    </h1>
                }
            </div>
        )
    }
}

export default ConditionalRender2