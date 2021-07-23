import React, {Component} from 'react';
import './graph.css';
import {insertionSort,getquickSort,bubbleSort,getMergeSortAnimations} from './sortingAlgorithms';
import menu from './menu.svg'
import line from './line.svg'
const PRIMARY_COLOR = 'turquoise';
const ANIMATION_SPEED_MS = 15;

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';
export default class Graph extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
     
    };
  }
  componentDidMount() {
     this.fillArray();
  }
   QuickSort() {

          const animations = getquickSort(this.state.grid);
        for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {

        setTimeout(() => {
          const [barOneIdx, barTwoIdx,barOneHeight,barTwoHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          
          barOneStyle.height = `${barOneHeight}px`;
          barTwoStyle.height = `${barTwoHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
costlyFunction (animations){
  // do something costly here
 for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }}
mergeSort() {
    const animations = getMergeSortAnimations(this.state.grid);
  
      this.costlyFunction(animations);

;
   
  }
    insertionSorting() {

          const animations = insertionSort(this.state.grid,this.state.grid.length);
        for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {

        setTimeout(() => {
          const [barOneIdx, barTwoIdx,barOneHeight,barTwoHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          
          barOneStyle.height = `${barOneHeight}px`;
          barTwoStyle.height = `${barTwoHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  bubbleSorting() {

          const animations = bubbleSort(this.state.grid,this.state.grid.length);
        for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {

        setTimeout(() => {
          const [barOneIdx, barTwoIdx,barOneHeight,barTwoHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          
          barOneStyle.height = `${barOneHeight}px`;
          barTwoStyle.height = `${barTwoHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
   fillArray= () =>{
        var grid=[]
        for(var i=0;i<140;i++){
           grid.push(numbergenerator(60,210))
        }
        

    this.setState({grid});
  }
  render() {
    const {grid} = this.state;
        return (
          <body>
           <div className='navbar'>
              <div className='container'>
                <a className="logo" href="#">Algorithm<span>Compare</span></a>
                <img id="mobile-cta" className="mobile-menu" src={menu} alt="Open Navigation"/>
                <nav>
                 <ul className="primary-nav">
                    <li className="current"><a >Sorting</a></li>
                    <li><a href="/path">PathFinding</a></li>
                    <li><a >Recursion</a></li>
                </ul>
                </nav>
              </div>
           </div>
          <div>
            <img src={line} width={"150%"} alt="divider" />
          <div>
          </div>
          <div className='buttonsdiv'>
              <div className='buttoncover'>
            <button className='buttons' onClick={() => this.fillArray()}>Reset</button>
            <button className='buttons' onClick={() => this.insertionSorting()}>Insertion Sort</button>
          <button className='buttons current' onClick={() => this.QuickSort()}>QuickSort Sort</button>
          <button className='buttons' onClick={() => this.bubbleSorting()}>Bubble Sort</button>
          <button className='buttons' onClick={() => this.mergeSort()}>Merge Sort</button>
          </div>
        </div>
        <div className="graph_container">
        

           {
             grid.map((value,index)=>(
               <div className="bar" key={index} style={{backgroundColor: PRIMARY_COLOR,height:`${value}px`}}>
               </div>
               ))
             
           }
        </div>
        </div>
        </body>
       )
  }

  }
  function numbergenerator(min,max) {
    return Math.floor(Math.random()*(max-min+1) +min);
    // body...
  }