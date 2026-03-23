// Write a program that finds the intersection of two arrays. 

let arr=[1,2,3,4,5,6];

let brr=[3,4,5,6,7,8,9];
let ans=[];

let i=0;


while(i<arr.length){
    if(!ans.includes(arr[i]) && brr.includes(arr[i])){
      ans.push(arr[i])  
    }
    i++;
}

console.log(ans);

