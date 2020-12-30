//https://programmers.co.kr/learn/courses/30/lessons/17680
function solution(cacheSize, cities) {
  let answer = 0;
  const cacheHit = 1;
  const cacheMiss = 5;
  const citiesArray = cities.map(word => word.toUpperCase());
  const cacheArray = [];

  for (let i = 0; i < cacheSize; i++) {
    answer += cacheArray.includes(citiesArray[0]) ? cacheHit : cacheMiss;
    cacheArray.push(citiesArray.shift());
  }

  citiesArray.forEach(word => {
    if (cacheArray.includes(word)) {
      answer += cacheHit;
      let deleteIndex = cacheArray.indexOf(word);
      cacheArray.push(word);
      cacheArray.splice(deleteIndex, 1);
    } else {
      answer += cacheMiss;
      cacheArray.push(word);
      cacheArray.shift();
    }
  })

  return answer;
}