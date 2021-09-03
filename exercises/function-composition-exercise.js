// compose func
const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x)

// pipe func
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)


const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110]
const boostSingleScores = scores.map((val) => (val < 10 ? val * 10 : val))
const rmvOverScores = boostSingleScores.filter((val) => val <= 100)
const rmvZeroScores = rmvOverScores.filter((val) => val > 0)
const scoresSum = rmvZeroScores.reduce((sum, val) => sum + val, 0)
const scoresCnt = rmvZeroScores.reduce((cnt, val) => cnt + 1, 0)

//Convert each statement to a function that can accept and act on any array.
const boostSingleScores2 = (arr) => arr.map((val) => (val < 10 ? val * 10 : val))
const rmvOverScores2 = (arr) => arr.filter((val) => val <= 100)
const rmvZeroScores2 = (arr) => arr.filter((val) => val > 0)
const scoresSum2 = (arr) => arr.reduce((sum, val) => sum + val, 0)
const scoresCnt2 = (arr) => arr.reduce((cnt, val) => cnt + 1, 0)

//Compose a function that will remove both zero or lower scores and scores over 100. Test it using the scores array.
const func1 = pipe(
  rmvZeroScores2,
  boostSingleScores2,
  rmvOverScores2
)
console.log(func1(scores))

//Compose a function that will do all the modifications to an array. Test it using the scores array.
const func2 = pipe(
  boostSingleScores2,
  rmvOverScores2,
  rmvZeroScores2,
  scoresSum2,
  scoresCnt2
)
console.log(func2(scores))

//Create a function that will accept an array and return the average. Use the function that sums scores and the function that counts scores or the length property.
const calcAverage = (arr) => {
  const sum = scoresSum2(arr)
  const count = scoresCnt2(arr)
  return sum / count
}
//Compose a function that will do all the modifications on an array and return an average.
const func3 = pipe(func2, calcAverage)
