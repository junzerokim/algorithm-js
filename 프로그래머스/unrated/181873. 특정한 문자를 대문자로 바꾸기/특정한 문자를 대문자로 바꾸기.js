function solution(my_string, alp) {
    var answer = [];
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === alp) {
            answer.push(my_string[i].toUpperCase());
        } else {
            answer.push(my_string[i])
        }
    }
    return answer.join('');
}