function solution(record) {
  const answer = [];
  const [item1, item2, item3] = dividingItems(record);
  const user = {};
  for (let i = 0; i < item1.length; i++) {
    if (item3[i] !== undefined) {
      user[item2[i]] = item3[i];
    }
  }

  for (let i = 0; i < item1.length; i++) {
    if (item1[i] === 'Enter') {
      answer.push(`${user[item2[i]]}님이 들어왔습니다.`);
    } else if (item1[i] === 'Leave') {
      answer.push(`${user[item2[i]]}님이 나갔습니다.`);
    }
  }
  return answer;
}

function dividingItems(record) {
  const [item1, item2, item3] = [[], [], []];
  record.forEach(element => {
    const items = element.split(' ');
    item1.push(items[0]);
    item2.push(items[1]);
    item3.push(items[2]);
  })
  return [item1, item2, item3];
}