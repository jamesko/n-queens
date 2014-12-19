/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var numbOfRooks = n;
  var board = new Board({n:n});
  function walkArray (row){
    for(var i = 0; i < numbOfRooks; i++){
      board.togglePiece(row, i);
      if(board.hasAnyRooksConflicts()){
        board.togglePiece(row, i);
        continue;
      }
      if(row === n-1){
        return
      }
      else {
        return walkArray(row +1);
      }
    }
  }
  walkArray(0);
  return board.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme
  var factorial = function(n) {
    if(n == 0) {
      return 1
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return factorial(n); //solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  var numbOfQueens = n;
  var board = new Board({n:n});
  function walkArray (row){
    var isSolvable = false;
    for(var i = 0; i < numbOfQueens; i++){
      board.togglePiece(row, i);
      if(board.hasAnyQueensConflicts()){
        if(i === numbOfQueens - 1){
          board.togglePiece(row, i);
          isSolvable = false;
          return isSolvable;
        }
        board.togglePiece(row, i);
        continue;
      }
      if(row === n-1){  // this check for the last row
        isSolvable = true;
        return isSolvable;
      } else {
        isSolvable = walkArray(row +1);
        if(isSolvable){
          return isSolvable;
        }
        board.togglePiece(row, i);
      }
    }
    return isSolvable;
  }
  walkArray(0);
  return board.rows();

  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  //return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
