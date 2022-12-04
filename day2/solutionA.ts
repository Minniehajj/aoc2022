const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

let runningTotal = 0;

const checkIfWon = (first: string, second: string) => {
  const winPoints = 6;
  const losePoints = 0;
  const drawPoints = 3;
  const xPoints = 1; // Rock
  const yPoints = 2; // Paper
  const zPoints = 3; // Scissors
  switch (first) {
    case "A": // Rock
      switch (second) {
        case "X": // Rock
          console.log("Draw");
          return drawPoints + xPoints;
        case "Y": // Paper
          console.log("Player 2 wins");
          return winPoints + yPoints;
        case "Z": // Scissors
          console.log("Player 1 wins");
          return losePoints + zPoints;
        default:
          return 0;
      }
    case "B": // Paper
      switch (second) {
        case "X": // Rock
          console.log("Player 1 wins");
          return losePoints + xPoints;
        case "Y": // Paper
          console.log("Draw");
          return drawPoints + yPoints;
        case "Z": // Scissors
          console.log("Player 2 wins");
          return winPoints + zPoints;
        default:
          return 0;
      }
    case "C": // Scissors
      switch (second) {
        case "X": // Rock
          console.log("Player 2 wins");
          return winPoints + xPoints;
        case "Y": // Paper
          console.log("Player 1 wins");
          return losePoints + yPoints;
        case "Z": // Scissors
          console.log("Draw");
          return drawPoints + zPoints;
        default:
          return 0;
      }
    default:
      return 0;
  }
};
for (const line of lines) {
  const first = line[0] as "A" | "B" | "C";
  const second = line[2] as "X" | "Y" | "Z";
  runningTotal += checkIfWon(first, second);
}

console.log(runningTotal);
