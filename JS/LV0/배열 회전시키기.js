// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
// 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers, direction) {
  var answer = [];
  if (direction === 'right') {
    answer.push(numbers[numbers.length - 1]);
    for (let i = 1; i < numbers.length; i++) {
      answer.push(numbers[i - 1]);
    }
  }
  if (direction === 'left') {
    answer.push(numbers[1]);
    for (let i = 1; i < numbers.length - 1; i++) {
      answer.push(numbers[i + 1]);
    }
    answer.push(numbers[0]);
  }
  return answer;
}
