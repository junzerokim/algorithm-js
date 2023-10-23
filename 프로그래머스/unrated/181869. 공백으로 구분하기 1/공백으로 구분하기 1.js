function solution(my_string) {
    var answer = [];
    let arr = [];
    arr.push(my_string.split(' '));
    console.log(arr);
    for (let i = 0; i < arr[0].length; i++) {
        answer.push(arr[0][i]);
    }
    return answer;
}