function fibonacci(num) {
    let a = 0, b = 1, temp;

    if (num === 1) {
        return a;
    }

    for (let i = 2; i <= num; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return a;
}
}
module.exports = fibonacci;
