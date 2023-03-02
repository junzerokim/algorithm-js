// i 팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
// 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다.
// 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
  var answer = 1;
  let num = 1;
  for (let i = 2; i <= n; i++) {
    num *= i;
    if (num > n) {
      break;
    } else if (n === 0) {
      answer = 0;
    }
    answer++;
  }
  return answer;
}
