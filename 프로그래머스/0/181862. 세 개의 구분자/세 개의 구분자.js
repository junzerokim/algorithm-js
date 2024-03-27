function solution(myStr) {
    var answer = [];
    answer = myStr.split(/a|b|c/g).filter((el) => el);
    return answer.length ? answer : ['EMPTY'];
}