function solution(arr, delete_list) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (delete_list.indexOf(arr[i]) === -1) {
            answer.push(arr[i]);
        }
    }
    return answer;
}