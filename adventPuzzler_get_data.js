const prompt = require("prompt-sync")({ sigint: true });
const adventPuzzler = require("./adventPuzzler");
const DATE = new Date();
const [DAY, YEAR] = getDateInfo();
const timeRemaining = adventPuzzler.nextPuzzleTimeRemaining();

function getDateInfo() {
  const DAY = DATE.getDate();
  const YEAR = DATE.getFullYear();
  if (DAY >= 1 && DAY <= 24) {
    return [DAY, YEAR];
  } else {
    return [1, YEAR];
  }
}

console.log(`${timeRemaining} until next puzzle unlock.`);

const year = prompt(`Enter Year (Default if Blank: ${YEAR}): `, YEAR);
const day = prompt(`Enter Day (Default if Blank: ${DAY}): `, DAY);

adventPuzzler.getPuzzleInput(year, day);
