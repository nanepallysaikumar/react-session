import React from "react";
import {connect} from "react-redux";
import {PerformButtonCLickActions} from "../../Redux/Actions/ReduxActions"

class ReduxComponents extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
      this.props.actions.triggeerEvent()  
    }

 
    render() {
        console.log("search results",this.props)
        return(
            <div>
                <h1>Redux Applications...</h1>
                <button  onClick={this.handleClick}>CLick TO get details</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("state",state)
 return {
     searchResults: {}
 }
}

const mapDispatchToProps = dispatch => ({
    actions: {
       triggeerEvent: () => dispatch(PerformButtonCLickActions())
    }
})

export default connect(
mapStateToProps,mapDispatchToProps
)(ReduxComponents)