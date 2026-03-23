//filter->customcode


let arr=[1,2,3,4,1,5,2,7,3,4,7];

let ans=[];

function isPrsent(ans,val){
    if(ans.length===0)return false;
    for(let i=0;i<ans.length;i++){
        if(val===ans[i])return true;

    }

    return false;
}

for(let i=0;i<arr.length;i++){
if(! isPrsent(ans,arr[i])){
ans.push(arr[i]);
}
}

console.log(ans);
