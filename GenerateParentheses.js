function generateParenthesis(n) {
    if (n === 0) {
        return [""];
    }

    const arr = new Array(n + 1).fill(null).map(() => []);
    arr[0] = [""];
    arr[1] = ["()"];

    for (let i = 2; i <= n; i++) {
        console.log("i",i);
        for (let j = 0; j < i; j++) {
            console.log("j",j);
            for (const counter1 of arr[j]) {
                console.log("counter1",counter1)
                for (const counter2 of arr[i - j - 1]) {
                    console.log("counter2",counter2)
                    
                    arr[i].push("(" + counter1 + ")" + counter2);
                    console.log(arr)
                }
            }
        }
    }

    return arr[n];
}


const n = 3;
console.log(generateParenthesis(n));