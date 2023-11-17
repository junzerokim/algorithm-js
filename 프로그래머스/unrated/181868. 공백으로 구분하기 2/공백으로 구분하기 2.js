function solution(my_string) {
    var answer = [];
    answer.push(...my_string.split(' ').filter(a => a !== ''));
    return answer;
}