function solution(arr) {
    var answer = arr;
    let length = arr.length;
    let exponent = 0;
    
    while (Math.pow(2, exponent) < length) {
        exponent++;
    }
    let fillCount = Math.pow(2, exponent) - length;
    for (let i = 0; i < fillCount; i++) {
        answer.push(0);
    }
    return answer;
}