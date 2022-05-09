import React, {useState, useEffect} from 'react';

const FunctionalBasedHook = () => {
    const [name, setName] = useState("saikumar"); // array destructutring--> useState its returning array
    const [item, setItem] = useState([
        {name: "pras",gender:"female"},
        {name: "likith",gender:"female"}
    ]);
    const [isEligible, setIseligible] = useState(true)


   const  triggerEvent = (event) => {
        setName(event.target.value)
    }

    useEffect(() => {
        console.log("hi hello....i am in use effect...name.")
    },[name])

    
    useEffect(() => {
        console.log("hi hello....i am in use effect of isEligible....")
    },[isEligible])

    // function triggerEvent(event) {
    //     setName(event.target.value)
    // }

    return(
        <div>
            <h1>My First Functional Based Hook Component</h1>
            <input type="text" name="name" onChange={triggerEvent}/>
            <p>Your name is....{name}</p>
        </div>
    )
}

export {FunctionalBasedHook}