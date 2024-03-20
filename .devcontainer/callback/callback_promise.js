//concept of callback(call after) comes when 
//1.you call a function before it's complete execution to some other function 
//2.you will simply get error message as-undefined, because you can't call a function before it's complete execution
//3.to handle this case callback concept came where 2'nd function will be automatically called when execution of first is completed
//4.so here display function is automatically called when trip function execution complete

//console.log("hello");
function display(value){
    console.log(value)
}

function trip(callback){

    setTimeout(function(){
        callback("hii what are doing")

    },1000)
}
//trip(display);
//console.log("world");

//*--------------------------->*-------------------->

//Callback Hell
// While doing multiple asynchronous operations, 
// the callback can get nested which is known as Callback Hell. 
// The problem with this is it becomes hard to work on them, 
// follow them and test them when they become so much convoluted.

//console.log("hello");
function display(value){
    console.log(value)
}

function trip(callback){

    setTimeout(function(){
        callback("hii what are doing")

        setTimeout(function(){
            callback("hii what are doing2")
            
            setTimeout(function(){
                callback("hii what are doing3")
                
                setTimeout(function(){
                    callback("hii what are doing4")
            
                },1000)
            },1000)
        },1000)
    },1000)
}
//trip(display);
//console.log("world");

// so solution to this problem was promise and async await
// let's see the another multiple callback function working 

//console.log("hello1");

function display1(value){
    console.log(value)
}

function display(secondPlanet,callback1){

    setTimeout(()=>{
        console.log(secondPlanet)
        callback1("earth")

    },1000)
}

function trip(firstPlanet,callback){

    setTimeout(function(){
        console.log(firstPlanet)
        callback("venus",display1)

    },1000)
}

//trip("mercury",display);
//console.log("world");

// now promise concept
// promise return two call back function either the promise is resolved or reject
// it return either of the two condtion, if it resolved it goes to .then(), or if rejected it goes to .catch()
// at the end, .finally() will be always returned
const pr= new Promise((resolve,reject)=>{

    setTimeout(()=>{
    resolve("hiiii")
        
    },2000);
}) ;

pr.then((res)=>{

    console.log(res);

})
.catch((err)=>{

    console.log(err);
})
.finally(()=>{
    console.log("santy finished")
})






