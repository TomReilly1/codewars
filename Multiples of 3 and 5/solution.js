function solution(number){
    if (number < 0) {
        return 0;
    }

    sum = 0;

    for (let i = 3; i < number; i+=3) {
        sum += i;
    }
    for (let i = 5; i < number; i+=5) {
        if (i % 15 !== 0) {
            sum += i;
        }
    }

    return sum;
}
