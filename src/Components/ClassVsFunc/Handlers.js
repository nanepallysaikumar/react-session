import React from "react";


class Handlers extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ""
        }
        //this.onChangeUsernameHandler = this.onChangeUsernameHandler.bind(this)
    }

    onChangeUsernameHandler = (event) => {
        // console.log("vlaue",event.target.value);
        // console.log("this",this)
         
        this.setState({
            username: event.target.value
        })
        //this.state.username = event.target.value;
    }

    render() {
        console.log("hi hello...    ")
        return(
         <div>
                <h1>Login Form</h1>
                <form name="loginform">
                    <label>User Name:</label><input onChange={this.onChangeUsernameHandler} name="username" type="text"/><br/>
                    <p>User is typing: {this.state.username}</p>
                    {this.state.username && <p>Welcome {this.state.username}</p>}
                </form>
         </div>
        )
    }
}

export {Handlers}