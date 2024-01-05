function solution(binomial) {
    var answer = 0;
    let a = 0;
    let b = 0;
    
    for (let i = 0; i < binomial.length; i++) {
        if (binomial[i] === '+') {
            a = Number(binomial.slice(0, i));
            b = Number(binomial.slice(i + 1));
            answer = a + b;
        } else if (binomial[i] === '-') {
            a = Number(binomial.slice(0, i));
            b = Number(binomial.slice(i + 1));
            answer = a - b;
        } else if (binomial[i] === '*') {
            a = Number(binomial.slice(0, i));
            b = Number(binomial.slice(i + 1));
            answer = a * b;
        }
    }
    return answer;
}