// Write a program to count how many times each element appears in an array. 

let arr=[1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4];
let ans=new Array(arr.length).fill(0)

for(let i=0;i<arr.length;i++){
    ans[arr[i]]++;
}
for(let i=0;i<ans.length;i++){
     if(ans[i]!==0)
    console.log(`${i}--->`,ans[i]);
    
}
