// asynchrous and synchronous 
console.log('one');
console.log('two');
console.log('three');
// synchronous 
console.log('one');
setTimeout(()=>{
    console.log('two');
},2000);
console.log('three');
// callbacks in javascript 
function sum (a,b){
    console.log(a+b);
}
function calculator(a,b,sumcallback){
    sumcallback(a,b);
}
calculator(1,2,sum);
// callback hell in javascript
// nested callback in program 
function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log('data',dataid);
        if(getnextdata){
            getnextdata();
        }
    },3000)
}
getdata(1, ()=>{
    getdata(2);
});
// promises in javascript 
let promises = new Promise((resolve, reject) => {
    console.log('i am promise')
    resolve('sucess');
})
// promise states
// 1.pending
// 2.fullfilled(suces)
// 3.rejected(err)
// example
function getdata(dataid,getnextdata){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data',dataid);
            resolve('sucess');
            if(getnextdata){
                getnextdata();
            }
        }, 5000);
    });
}

// .then(), .catch() in javascript 
const getpromise = ()=>{
    return new Promise((resolve, reject) => {
        console.log('i am programmer');
        reject("")
    });
};
let promise = getpromise();
promise.then((res)=>{
    console.log('promise fill', res);
});
promise.catch((err)=>{
console.log("rejected",err)
})
// async in javascript 
// async function getdata() {
//     console.log('getdat')
//     await getdata(1);
//     console.log('get 2');
//     await getdata(2);
//     console.log('get');
//     await getdata(3);
// }
function api(){
    return new Promise((resolve, reject) => {
       setTimeout (()=>{
        console.log('wheather data');
        resolve(200);
       },2000);
    })
}
async function getweatherdata() {
    await api();
    await api();
}
