//custom code

let arr=[1,2,3,4,5,6];
function Push(arr,val){
let newArray=[];
let k=0;
for(let i=0;i<arr.length;i++){
    newArray[k]=arr[i];
    k++;
}
newArray[k]=val;

 return newArray;   
}
let b=Push(arr,30);
console.log(b);

