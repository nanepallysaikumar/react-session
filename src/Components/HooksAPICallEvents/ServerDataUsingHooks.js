import React, {useState,useEffect} from "react";
import axios from 'axios';

const ServerDataUsingHooks = () => {
    const [items, setItems] = useState([]);

    useEffect(async () => {
        const serverData = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setItems(serverData.data)
    });

    return(
        <div>
            <h1>My First API interaction using Hooks...</h1>
            {
                items.map((list) => {
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

export {ServerDataUsingHooks}