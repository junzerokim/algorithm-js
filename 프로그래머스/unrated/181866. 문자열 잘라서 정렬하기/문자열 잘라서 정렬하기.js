function solution(myString) {
    var answer = [];
    answer = myString.split('x').sort().filter(a => a !== '');
    return answer;
}