function solution(num_list) {
    var answer = num_list[0];
    if (num_list.length >= 11) {
        for (let i = 1; i < num_list.length; i++) {
            answer += num_list[i];
        }
    }
    if (num_list.length <= 10) {
        for (let i = 1; i < num_list.length; i++) {
            answer *= num_list[i];
        }
    }
    return answer;
}