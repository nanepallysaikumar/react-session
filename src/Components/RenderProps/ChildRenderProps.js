import React from 'react';

class RenderPropsComponent extends React.Component {
    render() {
    return(
        <div>
            <h1>I ma in Child Componnent</h1>
            {this.props.renderData()}
        </div>
    )
    }
}

export {RenderPropsComponent}