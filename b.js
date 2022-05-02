function solution(board, moves) {
  var count = 0;
  var stack = [];

  for (var i = 0; i < moves.length; i++) {
    console.log(`m: ${moves}`);
    var now = moves[i] - 1;

    for (var j = 0; j < board.length; j++) {
      if (board[j][now] != 0) {
        console.log(`picked: ${board[j][now]}`);
        if (stack[stack.length - 1] === board[j][now]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[j][now]);
        }

        board[j][now] = 0;
        break;
      }
    }
  }
  console.log(count);
  return count;
}

board = [
  [0, 2, 0, 1, 1],
  [0, 1, 1, 1, 2],
  [3, 4, 4, 3, 1],
  [3, 2, 3, 4, 1],
  [3, 1, 1, 2, 2],
];
moves = [1, 1, 5, 1, 5, 4, 4, 2];
solution(board, moves);
