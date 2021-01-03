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
            firstName: "",
            lastName: "",
            isFriendly: false,
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

    handleSubmit() {
        console.log("Submitting values")
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                />
                <br/>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                />
                <br/>
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
                <br/>
                <button>Submit</button>
            </form>
        )
    }
}

export default FormPart2