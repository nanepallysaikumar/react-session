import React from 'react';

/*
Higher Order Component - taking the component as argument and returning an updated version of component in order
to make use of component state logic

A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

*/

const EnhancedComponent = (OriginalComponnet) => {
    class NewComponent extends React.Component {
        render() {
            return (
                <OriginalComponnet lname="paul" />
            );
        }
    }

    return NewComponent;
}

export default EnhancedComponent;