import React from "react";
import PropTypes from 'prop-types';


function AddressCard({data}) {
    return(
        <div>
            <h3>Name:{data.name}</h3>
            <h3>Address:{data.address}</h3>
            <h3>IsMale:{data.ismale}</h3>
            <h3>Age:{data.age}</h3>
        </div>
    )
}

AddressCard.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
    ismale: PropTypes.bool,
    age: PropTypes.number
}

export {AddressCard}