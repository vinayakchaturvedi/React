import React from "react"


class Header extends React.Component {
    render(props) {
        return (
            <header>
                <h2>Welcome, {this.props.userName}!</h2>
            </header>
        )
    }
}

class Greetings extends React.Component {
    render() {
        const hours = new Date().getHours();
        let timeOfDay
        if (hours >= 4 && hours < 12) timeOfDay = "Morning"
        else if (hours >= 12 && hours < 16) timeOfDay = "Afternoon"
        else if (hours >= 16 && hours < 20) timeOfDay = "Evening"
        else timeOfDay = "Night"
        return (
            <p>
                Good {timeOfDay} to you, Sir!
            </p>
        )
    }

}

class Greet extends React.Component {
    render() {
        return (
            <div>
                <Header userName="Vinayak"/>
                <Greetings/>
            </div>
        )
    }
}


export default Greet
