import React from 'react';
import {Button} from './Components/Button';
import Paragraph from './Components/Paragraph';
import {List} from './Components/List';
import {Paragraphs} from './Components/Paragraphs';
import ClassBasedComponent from './Components/ClassVsFunc/ClassBasedComponent';
import {Handlers} from './Components/ClassVsFunc/Handlers';
import {LifeCycleMethodsClassBased} from './Components/LifeCycleMethodsClassBased/LifeCycleMethods';
import {DataFromServer} from './Components/DataFromServer/DataFromServer';
import {AxiosDataFromServer} from './Components/DataFromServer/AxiosDataFromServer';
import {FunctionalBasedHook} from './Components/Hooks/FunctionalBasedHooks';
import {ServerDataUsingHooks} from './Components/HooksAPICallEvents/ServerDataUsingHooks';
import {BasicRouting} from './Components/Routing/RoutingApp';
import {SimpleCalculator} from "./Components/Refs/Refscncepts";
import {GrandFather} from './Components/ContextApi/ContextApi';
import {ProductCardListWithSearch} from './Components/HigherOrderComponents/ExampleHOC/HOCSearch';
import {ParentRenderProps} from './Components/RenderProps/RenderProps';
import {DisplayAddressCard} from './Components/PropTypes/DisplayAddressCard';
import {Greeting} from "./Components/PropTypes/DemoPropTypes";
import {ToDoApp} from "./Components/TodoApp/ToDoApp";
import ReduxComponents from "./Components/ReduxComponents/ReduxComponents"

/*
functional based component
1.before 16.3 version - funtional based components are dumb components
2.just render what they get.
*/
 function PrasLickApp() {
   console.log("Handlers",<Handlers/>)
  return(
    <div>
      {/* <h1>My First React App</h1>
      <p>its a great expeirce for me to lean front program program</p>
      <Button label="Continue"/>
      <Button label="Submit"/>
      <Button label="Add to  Cart"/>
      <hr/>
      <List/>
      <hr/>
      <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
          Aldus PageMaker including versions of Lorem Ipsum."/>


        <Paragraphs>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
          Aldus PageMaker including versions of Lorem Ipsum.
        </Paragraphs> */}
        {/* <ClassBasedComponent/> */}
        {/* <Handlers/> */}
        {/* <LifeCycleMethodsClassBased/> */}
        {/* <DataFromServer/> */}
        {/* <AxiosDataFromServer/> */}
        {/* <FunctionalBasedHook/> */}
        {/* <ServerDataUsingHooks/> */}
        {/* <BasicRouting/> */}
        {/* <SimpleCalculator/> */}
        {/* <GrandFather/> */}
        {/* <ProductCardListWithSearch/> */}
        {/* <ParentRenderProps/> */}
        {/* <DisplayAddressCard/> */}
        {/* <Greeting name= {true}/> */}
        {/* <ToDoApp/> */}
        <ReduxComponents/>

    </div>
  )
}

export default PrasLickApp;

/*
two kinds of exports. - es6   
1.named export -- directly exported as it is and also same name needs to be given when it is imported.
2.default export - default key word before the export

*/