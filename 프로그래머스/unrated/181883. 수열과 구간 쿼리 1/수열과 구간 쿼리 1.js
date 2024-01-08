function solution(arr, queries) {
    var answer = [];
    answer = arr;
    for (let i = 0; i < queries.length; i++) {
        let start = queries[i][0];
        let end = queries[i][1];
        
        for (let j = start; j <= end; ++j) {
            ++answer[j];
        }
    }
    return answer;
}