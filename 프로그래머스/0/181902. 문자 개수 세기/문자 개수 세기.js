function solution(my_string) {
    var answer = Array(52).fill(0);
    for (let i = 0; i < my_string.length; i++) {
        let ascii = my_string.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) {
            answer[ascii - 65]++;
        } else {
            answer[ascii - 71]++;
        }
    }
    return answer;
}