import React  from "react";

const FamilyContext = React.createContext({});


export class GrandFather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            srname: "paul"
        }
    }
    render() {
        return(
            <FamilyContext.Provider value={this.state.srname}>
                <Father/>
            </FamilyContext.Provider>
        )
    }
}

function Father() {
    return(
        <div>
            <Child/>
        </div>
    )
}

function Child() {
    return(
        <div>
            <GrandChild/>
        </div>
    )
}

function GrandChild() {
    return(
        <FamilyContext.Consumer>
            {context => <p>{context}</p>}
        </FamilyContext.Consumer>
    )
}