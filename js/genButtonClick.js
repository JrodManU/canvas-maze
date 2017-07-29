$(document).ready(function() {
  $("#genButton").click(function() {
    var maze = generateMaze();
    var ctx = $("#maze")[0].getContext("2d");
    var size = maze.length;
    for(var x = 0; x < size; x++) {
      for(var y = 0; y < size; y++) {
        ctx.fillRect(x*10,y*10,10,10);
      }
    }

  });
});
