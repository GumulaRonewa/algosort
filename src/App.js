import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import Graph from './searchgraph/Graph';
import BST from './trees/BST';
import Recursion from './recursion/Recursion';
import Navigation from './Navigation';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

const Home=()=>{
  return(
     <div className="Home">
       <button className="buttonH" >
         START
       </button>
     </div>
    )
}
const Main = () => {
  return (
  	<>
      <BrowserRouter>
     <Switch>
     <Route exact path="/" component={Graph} />
    <Route exact path="/path" component={PathfindingVisualizer} />
     <Route exact path="/Sort" component={Graph} />
     

  </Switch>
  </BrowserRouter>
    </>
  );
};



function App() {
  return (
  	<div>
  	  <Main />
     </div>
  );
}

export default App;
