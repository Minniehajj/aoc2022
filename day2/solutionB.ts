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
        case "X": // Lose
          return losePoints + zPoints;
        case "Y": // Draw
          return drawPoints + xPoints;
        case "Z": // Win
          return winPoints + yPoints;
        default:
          return 0;
      }
    case "B": // Paper
      switch (second) {
        case "X": // Lose
          return losePoints + xPoints;
        case "Y": // Draw
          return drawPoints + yPoints;
        case "Z": // Win
          return winPoints + zPoints;
        default:
          return 0;
      }
    case "C": // Scissors
      switch (second) {
        case "X": // Lose
          return losePoints + yPoints;
        case "Y": // Draw
          return drawPoints + zPoints;
        case "Z": // Win
          return winPoints + xPoints;
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
