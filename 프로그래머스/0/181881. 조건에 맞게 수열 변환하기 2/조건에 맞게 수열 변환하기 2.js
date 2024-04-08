function solution(arr) {
    var answer = 0;
    let prevArr = arr;
    while (true) {
        let changeCurArr = prevArr.map((a) => {
            if (a >= 50 && a % 2 === 0) return a / 2;
            if (a < 50 && a % 2 !== 0) return a * 2 + 1;
            return a;
        });
        let isAllSame = prevArr.every((a, i) => a === changeCurArr[i]);
        if (isAllSame) break;
        answer++;
        
        prevArr = changeCurArr;
    }
    return answer;
}