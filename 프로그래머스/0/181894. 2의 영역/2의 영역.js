function solution(arr) {
    var answer = [];
    let index = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            index.push(i);
        }
    }
    let minNum = Math.min(...index);
    let maxNum = Math.max(...index);
    for (let j = minNum; j <= maxNum; j++) {
        answer.push(arr[j]);
    }
    return answer.length ? answer : [-1];
}