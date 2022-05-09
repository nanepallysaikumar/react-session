import React from 'react';
import {RenderPropsComponent} from './ChildRenderProps';
import {ReusableComponnet} from './ReUsableComponent'

/*
The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.

*/


class ParentRenderProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "praslik..."
        }
    }

    render() {
        return(
            <RenderPropsComponent renderData= {
                () => (<ReusableComponnet name={this.state.name}/>)
            }  />
        )
    }
}

export {ParentRenderProps}