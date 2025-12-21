//for (let i = 1; i <= 20; i++) {
//    if (i % 3 == 0) {
//        console.log(i);
//    }
//}


function fibonacci(nth) {
    if (nth < 0) {
        return 0;
    }
    if (nth == 0) {
        return 1;
    }
    if (nth == 1) {
        return 1;
    }
    return fibonacci(nth-2) + fibonacci(nth-1);
}

const N = 40;
for (let i = 0; i < N + 1; i++) {
    const ret = fibonacci(i)
    console.log(`${i}: ${ret}`);
}

