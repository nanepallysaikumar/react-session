import React from 'react';
import EnhancedComponent from "./HigherOrderComponent"

class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "john"
        }
    }

    render() {
        return(
            <div>
                {this.state.fname}
                {this.props.lname}
            </div>
        )
    }
}

export default EnhancedComponent(BaseComponent)