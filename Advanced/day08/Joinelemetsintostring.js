// let arr=[1,2,3,4,5,6];

 let arr=['I','am','King'];


let str="";

for(let i=0;i<arr.length;i++){
    str=str+arr[i];
    if(i!==arr.length-1){
        str=str+' ';
    }
}
console.log(str);
