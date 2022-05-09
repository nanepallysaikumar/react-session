import React  from "react";
import axios from 'axios';

class AxiosDataFromServer extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            items:[]
        }
    }

    async componentDidMount() {
      try {
        const serverData = await axios.get("https://jsnplaceholder.typicode.com/posts");
        console.log("data",serverData.data);
        this.setState({
            items:serverData.data
        })
      }
      catch(e) {
          console.log("exception",e)
      }
    }


    render() {
        return(<div>
            <h1>My First usage of Axios Library...</h1>
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
        </div>)
    }
}

export {AxiosDataFromServer}