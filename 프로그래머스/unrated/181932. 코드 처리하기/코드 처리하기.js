function solution(code) {
    var answer = [];
    let mode = 0;
    for (let i = 0; i <= code.length - 1; i++) {
        if (mode === 0) {
            if (code[i] !== '1') {
                if (i % 2 === 0) {
                    answer.push(code[i]);
                }
            } else if (code[i] === '1') {
                mode = 1;
            }
        } else if (mode === 1) {
            if (code[i] !== '1') {
                if (i % 2 !== 0) {
                    answer.push(code[i]);
                }
            } else if (code[i] === '1') {
                mode = 0;
            }
        }     
    }
    return answer.length ? answer.join('') : "EMPTY";
}