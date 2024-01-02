function solution(my_string, is_suffix) {
    var answer = 0;
    let suffixArr = [];
    for (let i = 0; i < my_string.length; i++) {
        suffixArr.push(my_string.slice(i));
    }
    if (suffixArr.includes(is_suffix)) {
        answer = 1;
    }
    return answer;
}