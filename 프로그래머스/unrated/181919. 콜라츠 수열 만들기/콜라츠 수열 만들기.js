function solution(n) {
    var answer = [];
    let x = n;
    while (x !== 1) {
        answer.push(x);
        if (x % 2 === 0) {
            x = x / 2;
        } else if (x % 2 !== 0) {
            x = 3 * x + 1;
        }
    }
    answer.push(x);
    return answer;
}