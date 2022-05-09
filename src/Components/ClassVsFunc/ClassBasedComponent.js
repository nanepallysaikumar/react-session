import React  from "react";


 class ClassBasedComponent extends React.Component {
 constructor() {
     super();
     // WE CAN HAVE STATE object for class based/
     // state is mutable - it means we can update the state.
     // state should never mutate directly eg: const Person = {name: "prasanna"}; Person.name = "likitha"
     // state should update only via setState();

     /*
    prop vs State
    1.If we want to pass data from Parent to child or child to parent - we can use props // it is a data object for a specifci class
    2.props are immutable - state are mutable
     */

     this.state = {
         name: "saikumar",
         age:28,
        gender: "male" 
        }
 }

 render() {
    return(
        <div>
            <h1>My First Class Based Component</h1>
            My Name is: {this.state.name}
            My Age is : {this.state.age}
        </div>
    ) 
 }
}

//export {ClassBasedComponent}
export default ClassBasedComponent;