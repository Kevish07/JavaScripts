// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Promise Completed")
//     resolve(1001)
// })

// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Promise Completed")
//     reject(new Error("Internal Server Error"))
// })


//  Time out ot async code


// function sayMyName() {
//     console.log("Your Name :- ");
// }
// setTimeout(sayMyName,3000);

// setTimeout(() => {
//     console.log("Your Name");
// }, 5000);

// let firstPromise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log("Your Name");
//     }, 5000);
// })



let thePromise = new Promise((resolve, reject) => {
    let success = false;
    if(success) {
        resolve(10);
    }
    else {
        reject(-1);
    }
});


// thePromise.then((message) => {
//     console.log("The condition of your promise is :- " + message);
// }).catch((error) => {
//     console.log("You got an error on :- " + error);
// })

//  alternate method

// thePromise.then((message) => {
//     console.log("First msg :- " + message);
//     return 20;
// }).then((message) => {
//     console.log("Second msg :- " + message);
//     return 30;
// }).then((message) => {
//     console.log("Third msg :- " + message);
// }).catch((error) => {
//     console.log("Error" + error);
// })



let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,"First");
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve,2000,"Second");
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve,4000,"Third");
})

Promise.all([promise3,promise2,promise1])
.then((values) => {
    console.log(values)
}).catch((error) => {
    console.error(error);
})