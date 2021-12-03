const prompt = require("prompt-sync")({ sigint: true });
const adventPuzzler = require("./adventPuzzler");

const year = prompt("Enter Year: ");
const day = prompt("Enter Day: ");

adventPuzzler.getPuzzleInput(year, day);
