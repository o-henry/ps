function updownleftright(str) {
  let x = 1,
    y = 1;
  let dx = [0, 0, 1, -1];
  let dy = [-1, 1, 0, 0];
  let moves = ["L", "R", "U", "D"];

  for (let m of str) {
    let move = moves.findIndex((x) => x === m);
    let px = 1,
      py = 1;

    px += dx[move];
    py += dy[move];

    if (px < 1 || py < 1 || px > str.length || py > str.length) continue;
    [x, y] = [px, py];
  }

  console.log(x, y);
}

console.log(updownleftright("RRRUDD"));
