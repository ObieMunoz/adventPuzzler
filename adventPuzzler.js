const fetch = require("node-fetch");
const fs = require("fs");
const config = "./adventPuzzler.config";
const prompt = require("prompt-sync")({ sigint: true });
let configLoaded = false;

if (fs.existsSync(config)) {
  console.log("Config file found...");
  configLoaded = true;
  cookie = fs.readFileSync(config, "utf8");
  console.log(cookie);
} else {
  console.error("No configuration file!");
  console.error("Fetching from Advent of Code disabled.");
  init_config();
}

/**
 * Explains how to obtain a cookie identified for the Advent of Code website and prompts the user to save this data in a new adventPuzzler.config file.
 * AoC session cookies last approximately one month.
 */
function init_config() {
  const setConfiguration = prompt(
    "Would you like to create a configuration file? Y/N: "
  );
  if (setConfiguration[0].toLowerCase() === "y") {
    console.log("1. Log into www.adventofcode.com using Google Chrome.");
    console.log(
      "2. Open Chrome DevTools and navigate to the 'Application' tab."
    );
    console.log("3. In the 'Storage' section, open 'Cookies'.");
    console.log(
      "4. Find the website https://adventofcode.com on the list and click on it."
    );
    console.log(
      "5. Find the cookie labeled 'session' and copy the cookie value."
    );
    let sessionCookie = prompt("Please paste the copied cookie value: ");
    if (sessionCookie.length > 0) {
      fs.writeFileSync("./adventPuzzler.config", sessionCookie);
      cookie = sessionCookie;
      console.log("CREATED adventPuzzler.config!");
      configLoaded = true;
    }
  } else {
    console.error("Fetching from Advent of Code disabled.");
  }
}

function getAndSavePuzzleInputToFile(year = 2021, day) {
  if (!config) return console.error("ERROR: CONFIGURATION FILE REQUIRED.");
  fetch(`https://adventofcode.com/${year}/day/${day}/input`, {
    headers: { Cookie: `session=${cookie}` },
  })
    .then((res) => res.text())
    .then((text) => {
      fs.writeFileSync(`./${year}-day-${day}-puzzle-input.txt`, text);
      console.log("INPUT RETURNED FROM A FETCH REQUEST");
      return text;
    });
}

/**
 * Attempts to return the puzzle input for the day specified from a file in the current directory. Files follow the naming convention "day1.txt, day2.txt, etc."
 * If the file does not exist, fetch data from AoC website using built-in functions.
 * If fetch is required, module requires variable: cookie which stores your Advent of Code session cookie.
 * AoC cookies last approximately 30 days.
 * @param {number} year An integer representing the year of the Advent of Code puzzle.
 * @param {number} day An integer representing the day of the Advent of Code puzzle.
 * @returns A string representing the input for the puzzle.
 */
function getPuzzleInput(year = 2021, day) {
  const file = `./${year}-day-${day}-puzzle-input.txt`;
  if (fs.existsSync(file)) {
    text = fs.readFileSync(file, "utf8");
    console.log("INPUT RETURNED FROM SAVED FILE");
    return text;
  } else {
    return getAndSavePuzzleInputToFile(year, day);
  }
}

/**
 * Converts a string input into an array.
 * @param input A string representing the input for the puzzle.
 * @returns An array representing the input for the puzzle. If multiple values are found one each line,
 * they will be placed in nested arrays.
 */
function convertInputToArray(input) {
  const array = input.split("\n");
  const arrayOfArrays = array.map((string) => string.split(" "));
  if (arrayOfArrays.every((array) => array.length === 1)) {
    return arrayOfArrays.flat();
  }
  return arrayOfArrays;
}

module.exports = { getPuzzleInput, convertInputToArray };
