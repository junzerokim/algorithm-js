function solution(num_list, n) {
    var answer = [];
    let firstArr = [];
    let secondArr = [];
    
    for (let i = 0; i < n; i++) {
        firstArr.push(num_list[i]);
    }
    for (let i = n; i < num_list.length; i++) {
        secondArr.push(num_list[i]);
    }
    answer.push(...secondArr, ...firstArr);
    return answer;
}