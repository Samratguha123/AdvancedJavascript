let arr=[
    {
        name:"samrat",
        id:1,
        add:"Habra"
    },
    {
        name:"Rahul",
        id:2,
        add:"kolkata"
    },
    {
        name:"Nill",
        id:3,
        add:"Barasat"
    }
]

let ans=[]
for(let i=0;i<arr.length;i++){
    let {id}=arr[i];
    if(id !==1){
        ans.push(arr[i]);
    }
}
console.log(ans);
