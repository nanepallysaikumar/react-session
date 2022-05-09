import React, {useRef,useState} from 'react';


function SimpleCalculator() {
    const inputrefA = useRef("");
    const inputrefB = useRef("");
    const [result,setResult] = useState("")

    function add() {
        if(inputrefA.current.value && inputrefB.current.value) {
            const resultset = parseInt(inputrefA.current.value) + parseInt(inputrefB.current.value);
            setResult(resultset)
        } else {
            alert("Please enter values for A & B")
        }
    }
return(
    <div>
        <h1>Simple Calculator</h1>
        <div>
            <label>Provide Value for A:</label><input ref={inputrefA} name='a' type="text" placeholder="Please enter value..."/><br/>
            <label>Provide Value for B:</label><input name='b' ref={inputrefB} type="text" placeholder="Please enter value..."/>
            <br/><button onClick={add}>Add...</button>
            <p>Your Result on Click of Add button:{result}</p>
        </div>
    </div>
)
}

export {SimpleCalculator}