function solution(strArr) {
    let arr = strArr.map((x) => x.length);
    let answer = {};
    arr.forEach((x) => {
        answer[x] = (answer[x] || 0) + 1;
    })
    return Math.max(...Object.values(answer));
}