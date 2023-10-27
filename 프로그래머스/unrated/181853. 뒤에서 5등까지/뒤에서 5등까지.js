function solution(num_list) {
    var answer = [];
    for (let i = 0; i < 5; i++) {
        answer.push(num_list.sort((a, b) => a - b)[i]);
    }
    return answer;
}