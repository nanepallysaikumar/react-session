import React from 'react';

/*
this is propdrilling....
Prop drilling refers to the process of sending props from a higher-level component to a lower-level component. To pass the props down from the topmost component, we must do something like this: However, prop drilling can become an issue in itself because of its repetitive code
*/


function GrandFather() {
    return (
        <div>
            I am a grand father
            <Father surname="paul" />
        </div>
    )
}


function Father(props) {
    return (
        <div>
            I am a  father
            <p>{`my surname is ${props.surname}`}</p>
            <GrandChild surname={props.surname} />
        </div>
    )
}

function GrandChild(props) {
    return (
        <div>
            I am aGrandChild
            <p>{`my surname is ${props.surname}`}</p>
        </div>
    )
}