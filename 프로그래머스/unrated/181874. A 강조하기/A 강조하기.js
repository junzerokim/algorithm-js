function solution(myString) {
    return [...myString.toLowerCase()].reduce((acc, cur) => {
        if (cur === 'a') acc += cur.toUpperCase();
        else acc += cur;

        return acc;
    }, '');
}