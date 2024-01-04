function solution(myString) {
    var answer = [];
    let num = 0;
    
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === 'x') {
            answer.push(num);
            num = 0;
        } else {
            num++;
        }
    }
    answer.push(num);
    return answer;
}