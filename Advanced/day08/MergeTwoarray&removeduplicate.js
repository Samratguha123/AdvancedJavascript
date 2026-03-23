let arr=[1,1,1,2,3,4,5,5,5,5,6];
let brr=[7,7,7,7,7,8,9,9,9,9];

let ans=[];

let i=0;
let j=0;
while(i<arr.length ){
if(!ans.includes(arr[i])){
    ans.push(arr[i])
}
i++;
}
while(j<brr.length ){
if(!ans.includes(brr[j])){
    ans.push(brr[j])
}
j++;
}

console.log(ans);
