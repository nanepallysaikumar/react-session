import React from 'react';


class DataFromServer extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                items: []
            }       
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
            console.log("res",res)
           return res.json()
        })
        .then((data) => {
            console.log("data resoleved form the server",data);
            this.setState({
                items:data
            })
        })
    }

    render() {
        console.log("state data",this.state.items)
        return(
            <div>
                <h1>My First Client Server Interaction....</h1>
             {
                 this.state.items.map((list) => {
                     return(
                        <ul key={list.id}>
                         <li><label>ID:</label>{list.id}</li>  
                         <li><label>Title</label>{list.title}</li>   
                         <li><label>Body:</label>{list.body}</li>   
                        </ul>
                     )  
                 })
             }
            </div>
        )
    }
}

export {DataFromServer}
