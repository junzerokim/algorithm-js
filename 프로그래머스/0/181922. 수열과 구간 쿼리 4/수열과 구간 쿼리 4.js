function solution(arr, queries) {
    var answer = arr;
    for (let i = 0; i < queries.length; i++) {
        const [s, e, k] = queries[i];
        for (let j = s; j <= e; j++) {
            if (j % k === 0) {
                arr[j]++;
            }
        }
    }
    return answer;
}