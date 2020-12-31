function solution(m, musicinfos) {
    var answer = '';
    let musicArray = musicinfos.map(word => word.split(','));
    m =  transactionStr(m);
   
    
    let resultArray = [];
    
    musicArray.forEach(element => {
      let playTime = getPlayTime(element[0], element[1]); 
        element.shift();
        element[0] = playTime;
        element[2] = element[2].padEnd(playTime, element[2]);
        element[2] = transactionStr(element[2]);
        if(element[2].length > playTime){
            element[2] = element[2].slice(0,playTime);
        }
    })
    
    musicArray.forEach(element => {
        if(element[2].includes(m) || m.includes(element[2])){
            resultArray.push([element[0],element[1]]);
        }
    })
    let num = 0;
    let idx = 0;
    resultArray.forEach((element,index) => {
        if(num < element[0]){
            num = element[0];
            idx = index;
        }
    })
      
    return num ? resultArray[idx][1] : '(None)';
  }
  
  function getPlayTime(start, end) {
    const startTime = new Date(`0001/01/01 ${start}:00`);
    const endTime = new Date(`0001/01/01 ${end}:00`);
    return ( endTime - startTime ) / 60000;
  }
  
  function transactionStr (str) {
     const song = {'C' : 'A',
                 'C#' : 'B',
                 'D' : 'C',
                 'D#' : 'D',
                 'E' : 'E',
                 'F' : 'F',
                 'F#' : 'G',
                 'G' : 'H',
                 'G#' : 'I',
                 'A' : 'J',
                 'A#' : 'K',
                 'B' : 'L'};
    let str2 = [];
    for(let i = 0; i < str.length; i++){
        if(str[i+1] && str[i+1] === '#'){
            str2.push(str.substring(i, i + 2));
            i++;
        }else{
            str2.push(str[i]);
        }
    }
    for(let i = 0; i < str2.length; i++){
        str2[i] = song[str2[i]];
    }
    return str2.join('');
  }