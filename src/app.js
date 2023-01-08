const scores = {
  a: 20,
  b: 100,
  c: 70,
  d: 230,
};

function getScore(object) {
  let totalScore = 0;
  for (let key in object) {
    console.log((totalScore = totalScore + object[key]));
  }
}

getScore(scores); // 420
