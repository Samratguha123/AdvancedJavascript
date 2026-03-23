
//q.1 

// for(const i=0;i<5;i++){
//     console.log(i);
    
// }
// for(let i=0;i<5;i++){
//     console.log(i);
    
// }
// for(var i=0;i<5;i++){
//     console.log(i);
    
// }


// //q.2

// function abc(){

//     var a=10;
//     console.log(a);//print value of a


// }

// //console.log(a);//did not print value of a becuse a declear with var ,and it follow function scope

// //abc();

// {

//     let b=10;
// }

// //console.log(b);//it will not print value of b because it declear with let and let follow block scop(loop,if-else,{})

// // ************************************************
// //q.3

// //1.var
// var a=10;

// var a=20;

// console.log(a);//redeclear for var allow & re-initilized possible

// //2.let

// let l=10;

// let l=30; //here re-declear not possible but re-declear possible

// //3.const

// const cc=10;
// const cc=40;

// console.log(cc);//here re-declear & re-initlization not possible


// //********************************************************************************** */
// //q.4

// const obj={
//     name:"samrat"
//     ,age:22,
//     id:123,
// }

// obj.name="Rahul";//it is possible 


// obj={
//     name:"Dev",
//     age:20,
//     id:21
// }
// console.log(obj);//it show error because obj store address of the prevous obj,and it's type is const ,sothat it's value that mean new obj add cannot store within it

// //q.5

// console.log(aa);//undefine

// var aa=10

// console.log(dd);//refernce error

// let dd=20;



//7


// function outer() {
//     let a = 10;
//     var b = 20;
//     function inner() {

        //    let a=30;
        //    var b=90;
//         console.log(a);
//         console.log(b);

//     }

//     console.log(a);
//     console.log(b);
//     inner();


// }
// outer();


// //8

// dec()
// function dec(){
//     console.log('hi');
    
// }
// hh();
// var hh=function(){
//     console.log('hiiiii');
    
// }











