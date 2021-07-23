import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import Graph from './searchgraph/Graph';
import BST from './trees/BST';
import Recursion from './recursion/Recursion';
import Navigation from './Navigation';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";


const Main = () => {
  return (
  	<>
      <BrowserRouter>
     <Switch>
    <Route path="/path" component={PathfindingVisualizer} />
     <Route path="/Sort" component={Graph} />
     <Route path="/recursion" component={Recursion} />

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
function Runner(){
	 return (
    <div>
      <BrowserRouter>
     <Switch>
   
          <Route  path="/" component={Run} />
        

  </Switch>
  </BrowserRouter>

    </div>
  )
}
function App() {
  return (
  	<div>
  	  <Runner />
     </div>
  );
}

export default App;
