const prompt = require("prompt-sync")({ sigint: true });
const adventPuzzler = require("./adventPuzzler");

const DATE = new Date();
const [DAY, YEAR] = getDateInfo();
const H = 24 - DATE.getHours();
const M = 60 - DATE.getMinutes();
const S = 60 - DATE.getSeconds();

function getDateInfo() {
  const DAY = DATE.getDate();
  const YEAR = DATE.getFullYear();
  if (DAY >= 1 && DAY <= 24) {
    return [DAY, YEAR];
  } else {
    return [1, YEAR];
  }
}

console.log(`${H}:${M}:${S} until next puzzle unlock.`);

const year = prompt(`Enter Year (Default if Blank: ${YEAR}): `, YEAR);
const day = prompt(`Enter Day (Default if Blank: ${DAY}): `, DAY);

adventPuzzler.getPuzzleInput(year, day);
