function solution(myString, pat) {
    var answer = '';
    let index = myString.lastIndexOf(pat);
    answer = myString.split('').slice(0, index + pat.length).join('');
    return answer;
}