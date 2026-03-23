let arr=[1,2,3,4,5,6,7,8,9,10];

function Slice(arr,i,j){
    let ans=[];
    for(let k=i;k<j;k++){
        ans.push(arr[k]);
    }
    return ans;
}
let a=Slice(arr,0,2);
let b=Slice(arr,2,4);
let c=Slice(arr,4,6);
let d=Slice(arr,6,8);
let e=Slice(arr,8,10);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
