import React from 'react';
import {AddressCard} from './TypeCheckingPropTypes';

const obj = {
    name: "saikumar",
    address: "india",
    ismale: "true",
    age:"ttt"
}

function DisplayAddressCard() {
    return(
        <AddressCard  data={obj}/>
    )
}

export {DisplayAddressCard}