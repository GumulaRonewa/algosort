import React, {Component} from 'react';
import Node from './Node/Node';
import {dijkstra, getNodesInShortestPathOrder} from '../algorithms/dijkstra';
import {Astar} from '../algorithms/Astar';
import line from '../searchgraph/line.svg'
import menu from '../searchgraph/menu.svg'

import './PathfindingVisualizer.css';
import Button from 'react-bootstrap/Button';

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 9;
const FINISH_NODE_COL = 24;

export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
      bg:true,
      fn:true,
      start:[0,0],
      finish:[10,10],
    };
  }

  componentDidMount() {
    const grid = this.getInitialGrid(this.state.start[0],this.state.start[1],this.state.finish[0],this.state.finish[1]);
    this.setState({grid});
  }

  handleMouseDown(row, col) {
    if(this.state.bg){
       var start=[];
      start[0]=row;
      start[1]=col;
                this.setState({start});

      const grid = this.getInitialGrid(row,col,this.state.finish[0],this.state.finish[1]);
     this.setState({grid});
          this.setState({bg:false});

    }
    else if(this.state.fn && !this.state.bg){
       var finish=[];
      finish[0]=row;
      finish[1]=col;
                this.setState({finish});

      const grid = this.getInitialGrid(this.state.start[0],this.state.start[1],row,col);
     this.setState({grid});
          this.setState({fn:false});

    }
    else{
      const newGrid = this.getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid, mouseIsPressed: true});
    }
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = this.getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({grid: newGrid});
  }

  handleMouseUp() {
    this.setState({mouseIsPressed: false});
  }

  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-visited';
      }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path';
      }, 50 * i);
    }
  }
  visualizeDijkstra() {
    const {grid} = this.state;
    console.log(this.state.start)
   const startNode = grid[this.state.start[0]][this.state.start[1]];
         const finishNode = grid[this.state.finish[0]][this.state.finish[1]];  
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
      
    this.animateDijkstra(visitedNodesInOrder,nodesInShortestPathOrder);
  }
  getInitialGrid(startr,startc,fr,fc){
  const grid = [];
  for (let row = 0; row < 14; row++) {
    const currentRow = [];
    for (let col = 0; col < 40; col++) {
      currentRow.push(this.createNode(col, row,startr,startc,fr,fc));
    }
    grid.push(currentRow);
  }
  return grid;
};

 createNode(col, row,startr,startc,fr,fc){
  return {
    col,
    row,
    isStart: row === startr && col === startc,
    isFinish: row === fr && col === fc,
    g:0,
    f:0,
    h:0,
    cost:1,
    closed:false,
    parent:null,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};
 distance(y1,y2,x1,x2) {
  var yd=y1-y2;
  var xd=x1-x2;
  var x=Math.pow(xd,2);
  var y=Math.pow(yd,2);
  var tot=x+y;
  var d=Math.sqrt(tot)
  return tot;

}

 getNewGridWithWallToggled (grid, row, col) {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

  visualizeAstar(){
          const {grid} = this.state;
          const startNodeA = grid[this.state.start[0]][this.state.start[1]];
         const finishNodeA = grid[this.state.finish[0]][this.state.finish[1]];  
         const astar = Astar(grid, startNodeA, finishNodeA);
         this.animateDijkstra(astar[0],astar[1]);

  }
  resert(){
    /*const reset = this.getInitialGrid();
    this.setState({grid:reset});*/
  }

  render() {
    const {grid, mouseIsPressed} = this.state;

    return (
    <body>
     <div className='navbar'>
              <div className='container'>
                <a className="logo" >Algorithm<span>Compare</span></a>
                <img id="mobile-cta" className="mobile-menu" src={menu} alt="Open Navigation"/>
                <nav>
                 <ul className="primary-nav">
                    <li ><a href="/sort">Sorting</a></li>
                    <li className="current"><a href="#">PathFinding</a></li>
                    <li><a href="#">Recursion</a></li>
                </ul>
                </nav>
              </div>
           </div>
          <div>
            <img src={line} width={"150%"} alt="divider" />
          </div>
      <div className="center">
        <Button  style={{marginLeft:10}} onClick={() => this.visualizeDijkstra()}>
          Visualize Dijkstra's Algorithm
        </Button>
        <Button  style={{marginLeft:10}} onClick={() => this.visualizeAstar()}>
          Visualize Astar Algorithm
        </Button>
       
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const {row, col, isFinish, isStart, isWall} = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                      row={row}></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      </body>
    );
  }
}

 