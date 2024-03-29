// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

function solution(s, n) {
  var answer = '';
  for (i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      ascii += n;
      if (ascii > 90) ascii -= 26;
    }
    if (ascii >= 97 && ascii <= 122) {
      ascii += n;
      if (ascii > 122) ascii -= 26;
    }
    answer += String.fromCharCode(ascii);
  }
  return answer;
}
