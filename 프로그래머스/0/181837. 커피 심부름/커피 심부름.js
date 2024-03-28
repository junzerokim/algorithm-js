function solution(order) {
    var answer = 0;
    order.forEach((menu) => {
        if (menu.includes("americano") || menu === "anything") {
            answer += 4500;
        } else if (menu.includes("cafelatte")) {
            answer += 5000;
        }
    })
    return answer;
}