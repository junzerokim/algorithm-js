function solution(arr1, arr2) {
    var answer = 0;
    let arr1Sum = arr1.reduce((acc, cur) => acc + cur);
    let arr2Sum = arr2.reduce((acc, cur) => acc + cur);
    
    if (arr1.length < arr2.length) {
        answer = -1;
    } else if (arr1.length === arr2.length) {
        if (arr1Sum < arr2Sum) {
            answer = -1;
        } else if (arr1Sum > arr2Sum) {
            answer = 1;
        } else {
            answer = 0;
        }
    } else {
        answer = 1;
    }
    return answer;
}