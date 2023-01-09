const scores = {
  a: 20,
  b: 100,
  c: 70,
  d: 230,
};

function getScore(object) {
  let totalScore = 0;
  for (const value of Object.values(object)) {
    totalScore += value;
  }
  return totalScore;
}

console.log(getScore(scores)); // 420
