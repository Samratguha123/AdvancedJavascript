let arr = [1, 2, 3, 4, 5];
let ans = []
for (let i = 0; i < arr.length; i++) {
    let temp = arr[i] * arr[i];

    ans.push(temp);
}

console.log(ans);
