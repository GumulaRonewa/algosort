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
         <li><a href="/sort">START</a></li>
       </button>
     </div>
    )
}
const Main = () => {
  return (
  	<>
      <BrowserRouter>
     <Switch>
     <Route path="/" component={Home} />
    <Route path="/path" component={PathfindingVisualizer} />
     <Route path="/Sort" component={Graph} />
     

  </Switch>
  </BrowserRouter>
    </>
  );
};

function Run() {
  return (
    <>
     
      <Main/>

    </>
  );
}

function App() {
  return (
  	<div>
  	  <Run />
     </div>
  );
}

export default App;
