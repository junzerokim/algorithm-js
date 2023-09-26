function solution(num_list) {
    var answer = 0;
    let evenSum = [];
    let oddSum = [];
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            evenSum.push(String(num_list[i])); 
        } else {
            oddSum.push(String(num_list[i]));
        }
    }
    answer = Number(evenSum.join('')) + Number(oddSum.join(''));
    return answer;
}