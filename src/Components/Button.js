import React from 'react';

/*

*/
function Button({label}) {
    // {} - interpolation operator - to showcase any dynamic data on DOM - we have use interpolatio operator
    return(
        <button>{label}</button>
    )
}

export {Button}