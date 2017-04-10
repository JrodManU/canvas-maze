//NOTE: Origin is at top left
//false means there is a wall
//or that the area has not been reviewed
var mazeSize = 50;
var mazeSizeWithWalls = mazeSize * 2 + 1;
var cells;
var maze;

function generateMaze() {
  cells = booleanPlane(mazeSize);
  maze = booleanPlane(mazeSizeWithWalls);
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

function flood(x, y) {

}
