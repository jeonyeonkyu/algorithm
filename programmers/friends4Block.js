function solution(m, n, board) {
  let count = 0;
  let doubleBoard = board.map(ele => ele.split(''));

  while (true) {
    let count2 = count;
    let deleteToIndex = [];
    let preArray = doubleBoard[0];
    for (let i = 1; i < doubleBoard.length; i++) {
      let curArray = doubleBoard[i];
      for (let j = 0; j < doubleBoard[i].length; j++) {
        if (preArray[j] !== null && preArray[j] === curArray[j]) {
          let word = preArray[j];
          if (word === preArray[j + 1] && word === curArray[j + 1]) {
            deleteToIndex.push([i - 1, j]);
            deleteToIndex.push([i, j]);
            deleteToIndex.push([i - 1, j + 1]);
            deleteToIndex.push([i, j + 1]);
          }
        }
      }

      preArray = doubleBoard[i];
    }

    deleteToIndex.forEach(ele => {
      let [i, j] = [ele[0], ele[1]]
      if (doubleBoard[i][j] !== null) {
        count++;
        doubleBoard[i][j] = null;
      }
    })

    let swapBoard = swapRowAndColumn(doubleBoard);
    for (let i = 0; i < swapBoard.length; i++) {
      let jLength = swapBoard[i].length;
      for (let j = 0; j < swapBoard[i].length; j++) {
        if (swapBoard[i][j] === null) {
          swapBoard[i].splice(j, 1);
          j--;
        }
      }

      for (let j = 0; j < jLength; j++) {
        if (swapBoard[i][j] === undefined) {
          swapBoard[i].unshift(null);
        }
      }
    }
    doubleBoard = swapRowAndColumn(swapBoard);

    if (count === count2) {
      return count;
    }
  }
}

function swapRowAndColumn(doubleArray) {
  const resultArray = [];
  const [n, m] = [doubleArray.length, doubleArray[0].length];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      resultArray[i] = resultArray[i] || [];
      resultArray[i].push(doubleArray[j][i])
    }
  }
  return resultArray;
}

