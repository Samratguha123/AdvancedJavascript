
  
//Write a program to split an array into chunks of size n. 
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];


function Chunks(arr,val){
    let ans=[];
    let n=val;
    
    let buffer=[];
    for(let i=0;i<arr.length;i++){
      if(n){
        buffer.push(arr[i]);
        n--;
      }
      else{
        ans.push(buffer);
        buffer=[];
            buffer.push(arr[i])
        n=val-1;
     
      }
    }
   if(buffer.length!==0)
    ans.push(buffer)

   return ans;
}

console.log(Chunks(arr,3));
