import React from "react"
import TodoItem from "./TodoItem";
import todoData from "./TodoData";

class RenderTodo extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            return {
                todos: prevState.todos.map(item => {
                    if (item.id === id) {
                        item.completed = !item.completed
                    }
                    return item
                })
            }
        })
    }

    render() {
        const todoComponents = this.state.todos.map(item =>
            <TodoItem
                key={item.id}
                item={item}
                handleChange={this.handleChange}
            />
        )

        return (
            <div>
                {todoComponents}
            </div>
        )
    }

}

export default RenderTodo