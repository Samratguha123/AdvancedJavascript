let arr=[1,1,1,1,2,2,2,2,3,4,5,5,6];
let newArray=[];



for(let i=0;i<arr.length;i++){
if(!newArray.includes(arr[i])){
    newArray.push(arr[i]);
}

}

console.log(newArray);
