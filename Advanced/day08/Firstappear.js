// Write a program to find the index of the first occurrence of a given element in an array.
let arr=[1,2,3,4,4,4,5,6,7];

function firstAppearance(arr,val){
    let index=-1;

    for(let i=0;i<arr.length;i++){
        if(arr[i]===val){index=i;break;}
    }
return index;

}

let f=firstAppearance(arr,4);

console.log(f);
