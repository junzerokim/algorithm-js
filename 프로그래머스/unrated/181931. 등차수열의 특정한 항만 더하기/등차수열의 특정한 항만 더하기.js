function solution(a, d, included) {
    var answer = 0;
    let num = a;
    for (let i = 1; i <= included.length; i++) {
        if (included[i - 1]) {
            answer += num;    
        }
        num += d;   
    }
    return answer;
}