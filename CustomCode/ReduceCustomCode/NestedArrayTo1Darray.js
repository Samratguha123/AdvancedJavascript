let arr = [[1, 2], [3, 4], [5, 6]];
let ans = [];
function NestedTo1D(ans, val) {
    for (let i = 0; i < val.length; i++) {
        ans.push(val[i]);
    }
}
for (let i = 0; i < arr.length; i++) {
    NestedTo1D(ans, arr[i]);
}

console.log(ans);
