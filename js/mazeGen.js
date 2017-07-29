//NOTE: Origin is at top left
//false means there is a wall
//or that the area has not been reviewed
var mazeSize = 50;
var mazeSizeWithWalls = withWallSize(mazeSize);
var cells;
var cellStack;
var maze;
var startX = 0;
var startY = 0;
var endPosX = mazeSize - 1;
var endPosY = mazeSize - 1;

function generateMaze() {
  cells = booleanPlane(mazeSize);
  cellStack = [];
  maze = booleanPlane(mazeSizeWithWalls);
  flood(startX, startY);
  return maze;
}

function booleanPlane(size) {
  var plane = new Array(size);
  //using i and j because x and y are not definable yet
  for(var i = 0; i < size; i++) {
    plane[i] = new Array(size);
    for(var j = 0; j < size; j++) {
      plane[i][j] = false;
    }
  }

  return plane;
}
function getNeighbors(x, y) {
  var neighbors = [] ;

  neighbors.push([x+1,y]) if(isValid(x+1,y));
  neighbors.push([x,y-1]) if(isValid(x,y-1));
  neighbors.push([x,y+1]) if(isValid(x,y+1));
  neighbors.push([x-1,y]) if(isValid(x-1,y));

  return neighbors;
}
function isValid(x,y){
  return x > -1 && y > -1 && x < mazeSize && y < mazeSize
}
function flood(x, y) {
  

  var neighbors = getNeighbors(x,y);
  var chosenOne;
  if(neighbors.length == 0) {
    cellStack.pop();
    if(cellStack.length == 0) {
      return;
    }
    chosenOne = cellStack[cellStack.length - 1];
  }else {
    chosenOne = neighbors[Math.floor(Math.random()*neighbors.length)];
  }
  flood(chosenOne[0], chosenOne[1]);
}
function withWallSize(number) {
  return number * 2 + 1;
}
