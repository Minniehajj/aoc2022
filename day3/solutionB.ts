const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

const letterToNumber = (letter: string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.indexOf(letter) + 1;
};

let runningTotal = 0;

for (let i = 0; i < lines.length; i += 3) {
  const first = lines[i].split("").map((l) => letterToNumber(l));
  const second = lines[i + 1].split("").map((l) => letterToNumber(l));
  const third = lines[i + 2].split("").map((l) => letterToNumber(l));

  let c = 0;

  first.forEach((v) => {
    if (second.includes(v) && third.includes(v)) {
      c = v;
    }
  });

  runningTotal += c;
}

console.log(runningTotal);
