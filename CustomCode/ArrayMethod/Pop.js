let arr = [1, 2, 3, 4, 5, 6];
function Pop(arr) {
    let n = arr.length - 2;
    let ans = [];
    for (let i = 0; i <= n; i++) {
        ans[i] = arr[i];
    }
  return ans;

}
arr=Pop(arr);
console.log(arr)
arr=Pop(arr)

console.log(arr);




