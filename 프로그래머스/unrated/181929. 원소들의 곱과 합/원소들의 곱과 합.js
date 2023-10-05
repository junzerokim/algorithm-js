function solution(num_list) {
    var answer = 0;
    let a = 1;
    let b = 0;
    num_list.forEach(num => {
        a *= num;
        b += num;
    })
    let c = b ** 2;
    answer = a < c ? 1 : 0
    return answer;
}