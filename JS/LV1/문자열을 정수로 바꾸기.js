// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

function solution(s) {
  var answer = 0;
  if (s[0] === '-') {
    let str = s.split('');
    str.shift();
    answer = Number(str.join('')) * -1;
  } else answer = Number(s);
  return answer;
}
