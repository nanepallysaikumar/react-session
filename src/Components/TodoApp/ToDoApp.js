import React from "react";
import {DisplayTodos} from "./DisplayTodoItems";
import "./TodoApp.css"


export class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        // this is ref for the input box
        this.inputItem = React.createRef();
    }

    handSubmit = (event) => {
        console.log("event",this.inputItem.current.value);
        event.preventDefault();
        this.setState({
            items: this.state.items.concat(this.inputItem.current.value)
        });
        this.inputItem.current.value = ""
    }

    render() {
        return(
            <div>
                <h2>Todo Application for my DaiLY Rountine....</h2>
                <form onSubmit={this.handSubmit}>
                    <input type="text" className="todo-input-box" ref={this.inputItem} placeholder="Please type your todos..."/>
                    <button>Add</button>
                </form>
               <div className="display-section">
               {
                    this.state.items.map((item,index) => {
                        return(
                            <DisplayTodos item={item} key={index}/>
                        )
                    })
                }
               </div>
            </div>
        )
    }
}

/*

(a,b) => {
return a+b;
}

() => {

}

*/