const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

let runningTotal = 0;
const dictionary = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

for (const line of lines) {
  let priority = 0;
  const firstHalf = line.slice(0, line.length / 2);
  const secondHalf = line.slice(line.length / 2, line.length);

  for (const char of firstHalf) {
    if (secondHalf.includes(char)) {
      dictionary.map((letter, index) => {
        if (letter === char) {
          priority = index + 1;
        }
      });
    }
  }
  runningTotal += priority;
}

console.log(runningTotal);
