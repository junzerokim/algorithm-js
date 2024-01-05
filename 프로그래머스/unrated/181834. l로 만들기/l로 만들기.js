function solution(myString) {
    var answer = '';
    for (let i = 0; i < myString.length; i++) {
        if (myString.charCodeAt(i) < 'l'.charCodeAt(0)) {
            answer += 'l';
        } else {
            answer += myString[i];
        }
    }
    return answer;
}