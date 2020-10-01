// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
    return callback(stringList[0])
}
processFirstItem(['foo', 'bar'], (str) => str + str);
console.log(processFirstItem(['foo', 'bar'], (str) => str + str));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  -counter1 has 2 closures but counter2 has 1 closure which means counter2 takes more memory space than counter 1.
 *  
 * 2. Which of the two uses a closure? How can you tell?
 *  -counter1 used the closure. because it has innerfunction that mutates the count variable.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *  - counter 1 is preferable when you have to mutate functional scope variable and counter 2 is better if you have to make a single call.
 */

// counter1 code
function counterMaker() {
    let count = 0;
    return function counter() {
        count++;
    }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
    return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
    const score = Math.floor(Math.random() * 3);
    return score;
}
console.log(inning());


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game
 in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(cb, innings) {
    let score = {
        "Home": 0,
        "Away": 0,
    }
    let homeScore = 0;
    let awayScore = 0;

    for (let i = 0; i < innings; i++) {
        homeScore += cb();
        awayScore += cb();
    }
    score.Home = homeScore;
    score.Away = awayScore;
    return score;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore(inningCounter, homeScore, awayScore) {
    if (inningCounter == 1) {
        return "1st inning: " + awayScore + " - " + homeScore;
    } else if (inningCounter == 2) {
        return "2nd inning: " + awayScore + " - " + homeScore;
    } else if (inningCounter == 3) {
        return "3rd inning: " + awayScore + " - " + homeScore;
    } else {
        return inningCounter + "th inning: " + awayScore + " - " + homeScore;
    }
}

function scoreboard(cb1, cb2, number) {
    let homefinalScore = 0;
    let awayfinalScore = 0;
    for (let i = 1; i <= number; i++) {
        const homeScore = cb2();
        const awayScore = cb2();
        console.log(cb1(i, homeScore, awayScore));
        homefinalScore += homeScore;
        awayfinalScore += awayScore;
    }
    console.log("Final Score: " + awayfinalScore + " " + homefinalScore);
}

scoreboard(getInningScore, inning, 9);