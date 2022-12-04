const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\n\n");

let highestTotal = 0;
for (const line of lines) {
  const nums = line.split("\n").map((s) => parseInt(s, 10));
  const total = nums.reduce((a, b) => a + b, 0);
  if (total > highestTotal) {
    highestTotal = total;
  }
}

console.log(highestTotal);
