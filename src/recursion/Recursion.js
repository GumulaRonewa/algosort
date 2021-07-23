import React, {Component} from 'react';
import './recursion.css';
const PRIMARY_COLOR = 'turquoise';
const ANIMATION_SPEED_MS = 350;

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';
export default class Recursion extends Component {
	constructor() {
    super();
    this.state = {
      words: ["r","a","c","e","a","c","a","r"],
      test:"",
     
    };
  }
    palindrome() {
    	 var {words} = this.state;
    	 var animations=palindromeRecHelp(words);
        for (let i = 0; i < animations.length-2; i++) {
      const arrayBars = document.getElementsByClassName('p3');
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

        const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          
      }
    }
        this.setState({test:"true"});

    }
	 render() {
    const {words,test} = this.state;
        return (
        	<div>
        	          <button onClick={() => this.palindrome()}>Check</button>

          <div className="main_container">
           {
             words.map((value,index)=>(
         <p className="p3" style={{marginLeft:10}}>{value}</p>
         ))}
        </div>
           Palindrome :{test}
        </div>
       )
  }
}
function palindromeRec(array,animations,start,end) {
	var diff=end-start;
	if(diff <=0){

		if(diff==0){
	  	animations.push([start,end]);
	  	animations.push([start,end]);
	  	animations.push([start,end]);
	  	animations.push([true]);
		return animations

		}
			  	animations.push([true]);

		return animations
	}
	else{
	  if(array[start]===array[end]){
	  	animations.push([start,end]);
      animations.push([start,end]);
      animations.push([start,end]);
      return palindromeRec(array,animations,start+1,end-1)
	  }
	  animations.push([start,end]);
      animations.push([start,end]);
      animations.push([start,end]);
      	  	animations.push([false]);

	  return animations;
      
	}
}
function palindromeRecHelp(array) {
	   const animations =[];
	   return palindromeRec(array,animations,0,array.length-1);

}