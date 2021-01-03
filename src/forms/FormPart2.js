import React, {Component} from "react"

/**
 * All input elements other than text input
 *
 * Such as:
 * <textarea />
 * <input type = "checkbox" />
 * <input type = "radio" />
 * <select> and <option> elements
 */
class FormPart2 extends Component {

    constructor() {
        super();
        this.state = {
            isFriendly: true,
            textArea: "Some default value",
            gender: "",
            favColor: "blue"
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target

        type === "checkbox"
            ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    }

    render() {
        return (
            <div>
                <textarea
                    name="textArea"
                    value={this.state.textArea}
                    onChange={this.handleChange}
                />
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="isFriendly"
                        onChange={this.handleChange}
                        checked={this.state.isFriendly}
                    /> Is Friendly ?
                </label>
                <br/>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={this.handleChange}
                        checked={this.state.gender === "male"}
                    /> Male
                </label>
                <br/>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={this.handleChange}
                        checked={this.state.gender === "female"}
                    /> Female
                </label>
                <h2 style={{display: this.state.gender === "" && "none"}}>
                    You are {this.state.gender}
                </h2>
                <br/>
                <label>Favourite Colour: </label>
                <select
                    name="favColor"
                    value={this.state.favColor}
                    onChange={this.handleChange}
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>
                <h2>You favourite colour is {this.state.favColor}</h2>
                <br/>
            </div>
        )
    }
}

export default FormPart2