import React  from "react";


class LifeCycleMethodsClassBased extends React.Component {
    constructor() {
        console.log("i am in constructor")
        super();
        this.state = {
            name: "sai",
            isEligible: false
        }
    }

    /*Life Cycle Methods
   3 phases
   1.Mounting Phase: the phase where our react component mounts on the DOM(DOM object Mode)
      1.Constructor()
      2.static getDerivedStateFromProps()
      3.render()
      4.componentDidMount()
   

    2.Updating Phase
     1.static getDerivedStateFromProps()
     2.shouldComponentUpdate();
     3.render()
     4.getSnapShotBeforeUpdate()

     3.Unmounting Phase
     ComponentDidUnMount()
    */
   

     static getDerivedStateFromProps() {
        console.log("i am in getDerivedStateFromProps");
        // return {
        //     name:"Sai Kumar"
        // };
        return null;
     }

     shouldComponentUpdate() {
         console.log("i am in shouldComponentUpdate");
    //    if(true) {
    //     return true;
    //    }
    return false
     }

     getSnapshotBeforeUpdate() {
         console.log("i am in getSnapshotBeforeUpdate");
         return null;
     }

     componentDidUpdate() {
         // API calls
         console.log("componentDidUpdate");
    //   if(this.state.name !== 'liprasanan') {
    //     this.setState({
    //         name: "liprasanan"
    //     })
    //   }

// if(isEligible) {
//     console.log("i want to manipulate iselegible");
// }
// if(name) {
        
//     console.log("i want to manipulate name")
// }
     }



     componentDidMount() {
         // for making API calls - setState() has to be called for re-render
         console.log("i am in componentDidMount")
     }

     onChangeHandler = (event) => {
         console.log("i am in onChangeHandler",event.target.value);
         this.setState({
            name: event.target.value
         })
     }

    render() {
        console.log("i am in render method")
        return(
            <div>
                <h1>Life Cycle Methods</h1>
                <input type="text" name="name" onChange={this.onChangeHandler}/>
                <p>My name is {this.state.name}</p>
            </div>
        )
    }
}

export {LifeCycleMethodsClassBased}