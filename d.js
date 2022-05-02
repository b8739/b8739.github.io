function solution(s) {
  //최종 길이
  var answer = 0;

  //정답후보들, 아래 반복문에서 압축길이를 추출해서 넣어주고, 정답으로 이 중 최소를 꺼내게 됨
  let lengthArr = [];

  // S 길이까지 모든 압축 길이를 실험해봄
  for (let i = 1; i <= s.length; i++)
    lengthArr.push(compressedString(s, i).length);
  console.log(lengthArr);
  answer = Math.min(...lengthArr);

  return answer;
}

//str은 압축할 문장이고 unitNum은 알파벳 몇개 단위로 압축할건지 (여기까지는 내 그리디 접근방식이 맞았음)
function compressedString(str, unitNum) {
  //몇개 단위로 압축되는지?
  let count = 1;
  //압축된 문자열
  let result = [""];

  for (let repeat = 0; repeat <= str.length / unitNum; repeat++) {
    
    const slicedGroup = str.slice(unitNum * repeat, unitNum * repeat + unitNum);

    //똑같은 패턴으로 잘릴때마다 count를 늘림 (압축되는 과정)
    if (result[result.length - 1] === slicedGroup) {
      count++;
    } 
    
    else {
      if (count > 1)
        result[result.length - 1] = count + result[result.length - 1];
      result.push(slicedGroup);
      console.log(result);
      count = 1;
    }
  }

  return result.join("");
}
let a = "ababcdcdababcdcd";
solution(a);
