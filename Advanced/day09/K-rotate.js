// Write a program to rotate an array by k positions to the right.
let arr=[1,2,3,4,5,6,7,8];


//8,7,6,5,4,3,2,1
//6,7,8,5,4,3,2,1
//6,7,8,1,2,3,4,5

function rev(arr,i,j){
while(i<=j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
}

}

let k=3;
k=k%(arr.length);
if(k==0){
    console.log(arr);
    
}
else{
    rev(arr,0,arr.length-1);
    rev(arr,0,k-1);
    rev(arr,k,arr.length-1)

    console.log(arr);
    
}

