function findSum(n) {
    sum = 0

    for (let i = 0; i <= n; i+=3) {
        sum += i;
    }
    for (let i = 0; i <= n; i+=5) {
        if (i % 3 != 0) {
            sum += i;
        }
    }

    return sum;
}
