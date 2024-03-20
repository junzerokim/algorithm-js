function solution(my_string, s, e) {
    let arr = my_string.split('');
    let newStr = arr.slice(s, e + 1).reverse();
    arr.splice(s, e - s + 1, newStr);
    let answer = arr.flat().join('');
    return answer;
}