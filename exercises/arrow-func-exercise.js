const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110]

//Any scores that are below 10 needs to be multiplied by 10 and the new value included.
const boostSingleScores = scores.map(val => (val < 10 ? val * 10 : val))

//Remove any scores that are over 100.
const rmvOverScores = boostSingleScores.filter(val => val <= 100)

//Remove any scores that are 0 or below.
const rmvZeroScores = rmvOverScores.filter(val => val > 0)

//Sum the scores.
const scoresSum = rmvZeroScores.reduce((sum, val) => sum + val, 0)

//Provide a count for the number of scores still remaining.
const scoresCnt = rmvZeroScores.reduce((cnt, val) => cnt + 1, 0)
