const playerName = "Siwoo";
const playerPoint = 1234;
const playerSmart = false;


// player[0] == name
// player[1] == point
// player[2] == smart
// const player = ["Siwoo", 1234, false];

const player = {
  name : "Siwoo",
  point : 1234,
  smart : false
};

console.log(player);
console.log(player["name"]);

console.log(player.smart);
player.smart = true;
console.log(player.smart);

player.class = "1-2";
console.log(player.class);