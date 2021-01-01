function solution(relation) {
  const indexArray = Array.from({ length: relation[0].length }, (_, index) => index);
  const powerSetArray = powerSet(indexArray);
  let passArray = [];
  let resultArray = [];
  powerSetArray.forEach(arr => {
    arr.forEach(ele => {
      relation.forEach((e, index) => {
        passArray[index] = passArray[index] || [];
        if (!passArray[index].length) {
          passArray[index].push(e[ele]);
        } else {
          let pre = passArray[index].pop();
          passArray[index].push(pre + '' + e[ele]);
        }
      })
    })
    let flag = isDuplicate(passArray.flat());
    if (!flag) {
      resultArray.push(arr);
    }
    passArray = [];
  })

  const minimalArray = getMinimalityKeys(resultArray);
  return minimalArray.length;
}

function powerSet(arr) {
  let flag = new Array(arr.length).fill(false);
  let result = [];
  const subSet = (depth) => {
    if (depth === arr.length) {
      result.push(arr.filter((_, index) => flag[index]));
      return;
    }
    flag[depth] = true;
    subSet(depth + 1);

    flag[depth] = false;
    subSet(depth + 1);
  }
  subSet(0);
  result.sort((a, b) => a.length - b.length)
  result = result.filter(ele => ele.length);
  return result;
}

function isDuplicate(array) {
  return (new Set(array)).size !== array.length;
}

Set.prototype.isSuperset = function (subset) {
  for (let elem of subset) {
    if (!this.has(elem)) {
      return false;
    }
  }
  return true;
}

function getMinimalityKeys(uniqueKeys) {
  const keys = [...uniqueKeys];
  console.log(keys)
  for (let i = 0; i < keys.length - 1; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      const set1 = new Set(keys[i]);
      const set2 = new Set(keys[j]);
      if (set2.isSuperset(set1)) {
        keys.splice(j, 1);
        j--;
      }
    }
  }
  return keys;
}
