import React from "react";
import "./TodoApp.css"

 class DisplayTodos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    handleChecked = (e) => {
        console.log("handle cheked....");
        if(this.state.isChecked === false) {
            this.setState({
                isChecked: true  
            })
        } else {
            this.setState({
                isChecked: false
            })
        }
    }

    render() {
        return(
            <div>
                <input onChange={this.handleChecked} type="checkbox"/>
                <span className={this.state.isChecked === true ? "checked" : ""}>{this.props.item}</span>
            </div>
        )
    }
}

export {DisplayTodos}