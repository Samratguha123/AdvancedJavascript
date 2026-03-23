
let obj=[
  { id: 1, name: "Rahul" },
  { id: 2, name: "Amit" }
];


let ans=[];


function  ObjectConverter(ans,val){
let {id,name}=val;
let temp={};
temp[id]=name;
ans.push(temp)
}


for(let i=0;i<obj.length;i++){
    
     ObjectConverter(ans,obj[i]);
}

console.log(ans);
