import React, {Component} from "react"

class Fetch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })

        fetch("https://swapi.dev/api/people/1/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data,
                    isLoading: false
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? "Loading..." : this.state.character.name}
            </div>
        )
    }
}

export default Fetch