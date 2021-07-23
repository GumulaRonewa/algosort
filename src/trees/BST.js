import React, {Component} from 'react';
import './tree.css';

export default class BST extends Component {
  constructor() {
    super();
    this.state = {
    	first:0,
      value:[{
      	 val:1,
      	 parent:0,
      	 left:"50%",
      	       	 dleft:false,

      	 right:20,
         width:"0px",
      	 has:false,
      	 top:10
      }
      ]
     
    };
  }
   componentDidMount() {
           this.updateWindowDimensions();
            window.addEventListener("resize", this.updateWindowDimensions);

  }
  componentWillUnmount() {
            window.removeEventListener("resize", this.updateWindowDimensions);
        }

   fillArray= () =>{
      
            	    const {value,first} = this.state;
            	
         const data={
      	 val:13,
      	 parent:0,
      	 left:"55.5%",
      	 right:20,
      	 top:93,
      	 dleft:true,
      	 has:true,
      	 ltop:20,
      	 leftl:"54%"
      }
      const data2={
      	 val:7,
      	 parent:0,
      	 left:"44.5%",
      	 right:20,
      	       	 dleft:false,

      	 top:93,
      	 has:true,
      	 ltop:20,
      	 leftl:"48%"
      }
      const data3={
      	 val:20,
      	 parent:13,
      	 left:"60.5%",
      	 right:20,
      	 top:173,
      	 dleft:true,
      	 has:true,
      	 ltop:105,
      	 leftl:"59%"
      }
      if(first ===0){
      	      value.push(data)
      	          this.setState({first:1});


      }
       else if(first ===1){
      	      value.push(data2)
      	          this.setState({first:2});


      }
      else{
      	      value.push(data3)

      }
    this.setState({value});
  }

        updateWindowDimensions = () => {
            this.setState({ width: window.innerWidth});
        };


    render() {
    	    var {width} = this.state;
          var wi=width/2
    	return (

    	  <div >
        {width}
    	            <button onClick={() => this.fillArray()} >Add</button>
    	            <div className="dot0" style={{marginLeft:wi}}>
                 7
            </div>
    	        <div style={{marginLeft:wi-80}}>
               <Left number={6}/>
               </div>
            
               <div style={{marginLeft:wi,marginTop:20}}>
               <Right number={8} />
               </div>
              


         </div>
        )
 }
}
function Left(props) {

	 	return(
	<div >
	  <Line />
	  <Ball number={props.number}/>
	  
    </div>
	)
}
function Right(props) {

	 	return(
	<div >
	  <LineR />
	  <BallR number={props.number}/>
	  
    </div>
	)
}
function Line() {
	return( <div className="vr"  />
)
}
function LineR() {
	return( <div className="vl"  />
)
}
function Ball(props) {
	return( <div className="dot">
                 {props.number}
            </div>
)
}
function BallR(props) {
	return( <div className="dot2">
                 {props.number}
            </div>
)
}