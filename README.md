# Advent of Code Data Module for JavaScript

## INSTALLATION:

1. Place adventPuzzler.js and package.json in the same folder.
2. Run 'npm install'.

Care was taken to prevent this module from intentionally making multiple fetch requests to the Advent of Code website. The module will first look to see if a data file for the specific day requested is already in the local directory before making any fetch requests.

<em><strong>Please do not attempt to circumvent this procedure.</strong></em>

## USAGE:

1. Load in your project with :

```
const adventPuzzler = require("./adventPuzzler")
```

2. adventPuzzler.config must be created and inside the local directory, with your AoC session cookie saved, to grab your data.

3. Upon load, the Module will walk you through the process of obtaining your session cookie and will create the file for you if it does not exist.

### FILE: adventPuzzler_get_data.js

This JavaScript example application will prompt the user for a year and a puzzle day, then obtain that specific puzzle data input from the AoC website and save it to the local directory.

### Function Definitions:

<strong>convertInputToArray(input)</strong>

```
/**
 * Converts a string input into an array.
 * @param input A string representing the input for the puzzle.
 * @returns An array representing the input for the puzzle. If multiple values are found one each line,
 * they will be placed in nested arrays.
 */
```

<strong>getPuzzleInput(year, day)</strong>

```
/**
 * Attempts to return the puzzle input for the day specified from a file in the current directory. Files follow the naming convention "day1.txt, day2.txt, etc."
 * If the file does not exist, fetch data from AoC website using built-in functions.
 * If fetch is required, module requires adventPuzzler.config which stores your Advent of Code session cookie.
 * AoC cookies last approximately 30 days.
 * @param {number} year An integer representing the year of the Advent of Code puzzle.
 * @param {number} day An integer representing the day of the Advent of Code puzzle.
 * @returns A string representing the input for the puzzle.
 */
```

### Function: convertInputToArray(input)

#### Example 1:

```
let example = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;
```

Using the module, convert this data to an array:

```
example = adventPuzzler.convertInputToArray(example)
```

This will result in the output:

```
[
  '00100', '11110',
  '10110', '10111',
  '10101', '01111',
  '00111', '11100',
  '10000', '11001',
  '00010', '01010'
]
```

#### Example 2:

Alternatively, if your input data is multiple words per line:

```
let example = `forward 1
down 5
down 6
down 2
forward 8
up 3
up 2
down 2`;
```

This results in an array of arrays, such as:

```
[
  [ 'forward', '1' ],
  [ 'down', '5' ],
  [ 'down', '6' ],
  [ 'down', '2' ],
  [ 'forward', '8' ],
  [ 'up', '3' ],
  [ 'up', '2' ],
  [ 'down', '2' ]
]
```
