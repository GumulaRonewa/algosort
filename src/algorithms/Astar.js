export function Astar(grid, startNode, finishNode) {
    var open = [];
    var closed = [];
	  startNode.f=startNode.g+distance(startNode.row,finishNode.row,startNode.col,finishNode.col);
	  open.push(startNode);
     while( open.length>0){
     	    sortNodesByDistance(open);
                         
              	     		                
     	    const N = open.shift();
     	    if(N===finishNode){
            var cur=N;
            var back=[];
                              console.log("finished");

           while(cur.parent !== null){
                  back.push(cur);
                  
              cur=cur.parent;

                } 
             back.push(startNode);
              back.shift() ; 
            var output=[];
            closed.shift();
            output[0]=closed;
            back.reverse()
            back.shift() ;
            output[1]=back;     
            return output;
                  //console.log(Path(N))
;         //return Path(N) ;
          }

           var neighbors=Neighbouring(grid,N,true);
          
           N.closed=true;
           closed.push(N);
                         console.log(neighbors[0].isVisited)

           for(var neighbor of neighbors) {

            if(neighbor.closed || neighbor.isWall) {

                    // Not a valid node to process, skip to next neighbor.
                    continue;
                }
            var gScore = N.g +distance(neighbor.row,N.row,neighbor.col,N.col);
                      var beenVisited = neighbor.isVisited;
                   
            if(!beenVisited || gScore < neighbor.g) {
                    // Found an optimal (so far) path to this node.  Take score for node to see how good it is.
                    neighbor.isVisited = true;
                    neighbor.parent = N;
                    neighbor.g=gScore;
                    neighbor.h=distance(neighbor.row,finishNode.row,neighbor.col,finishNode.col);
                    neighbor.f=neighbor.g+neighbor.h;
                     if (!beenVisited) {


                        // Pushing to heap will put it in proper place based on the 'f' value.
                        open.push(neighbor);
                                              sortNodesByDistance(open);

                    }
                    else{


                      sortNodesByDistance(open);
                    }

         
            }
           
           }

     }
     const empty = [];
     return empty;


}

 function Neighbouring(grid, node, diagonals) {
        var ret = [];
        var x = node.row;
        var y = node.col;

        // West
        if(grid[x-1] && grid[x-1][y]  && !grid[x-1][y].isWall )  {
            ret.push(grid[x-1][y]);
        }

        // East
        if(grid[x+1] && grid[x+1][y] && !grid[x+1][y].isWall) {
            ret.push(grid[x+1][y]);
        }

        // South
        if(grid[x] && grid[x][y-1] && !grid[x][y-1].isWall) {
            ret.push(grid[x][y-1]);
        }

        // North
        if(grid[x] && grid[x][y+1] &&  !grid[x][y+1].isWall  ) {
            ret.push(grid[x][y+1]);
        }

        if (diagonals) {

            // Southwest
            if(grid[x-1] && grid[x-1][y-1]  && !grid[x-1][y-1].isWall) {
                ret.push(grid[x-1][y-1]);
            }

            // Southeast
            if(grid[x+1] && grid[x+1][y-1] && !grid[x+1][y-1].isWall) {
                ret.push(grid[x+1][y-1]);
            }

            // Northwest
            if(grid[x-1] && grid[x-1][y+1] && !grid[x-1][y+1].isWall) {
                ret.push(grid[x-1][y+1]);
            }

            // Northeast
            if(grid[x+1] && grid[x+1][y+1] && !grid[x+1][y+1].isWall) {
                ret.push(grid[x+1][y+1]);
            }

        }

        return ret;
    }
function sortNodesByDistance(open) {
  open.sort((nodeA, nodeB) => nodeA.f - nodeB.f);
}
function Path(current){
		  const path = [];
		  while(current.parent !== null){
		  	path.push(current);
		  	current=current.parent;

		  }
		  console.log(path);
		  return path.reverse();



}
const distance = (y1,y2,x1,x2) => {
  var yd=y1-y2;
  var xd=x1-x2;
  var x=Math.abs(xd);
  var y=Math.abs(yd);
  var tot=x+y;
  return tot;

}

 