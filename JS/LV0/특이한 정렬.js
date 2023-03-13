// 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다.
// 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다.
// 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numlist, n) {
  return numlist.sort((a, b) => {
    let aGap = Math.abs(a - n); // a의 거리
    let bGap = Math.abs(b - n); // b의 거리

    if (aGap === bGap) return b - a; // 거리가 동일한 경우 더 큰 수를 배치, 다를 경우 거리별 오름차순 정렬
    return aGap - bGap;
  });
}
