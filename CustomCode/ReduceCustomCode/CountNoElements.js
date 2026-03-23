let arr = ['Nill', 'Nill', 'Sayan', 'Sayan', 'rupam'];

let ans = [];

function CountNoElemets(arr, val) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) { count++; arr[i] = -1; }
    }
    return count;
}
let temp = "";



for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
        temp = arr[i];
        let count = CountNoElemets(arr, arr[i]);
        temp = temp + ':' + String(count)
        ans.push(temp);
    }

}
console.log(ans);
