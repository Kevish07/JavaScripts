// let obj = {
//     yourName: "Name Agya",
//     age: 69,
//     weight: 11,
//     height: "6kgs",
//     greet: function(){
//         console.log("Kya haal chaal");
//     }
// }

// for in loop

// for(let key in obj) {
//   console.log(key, " ", obj[key])
// }

// console.log(obj);
// obj.greet()


// creating strings



// let arr = [1,2,3,4,5]
// let brr = new Array("ye string hai", 69, "2401010485")
// console.log(brr[1]);

// array built-ins

// const arrBuilt = ["index", "", 69];
// arrBuilt.push("Pushing done");  //add anything on right
// arrBuilt.pop();                 // remove any. on right
// arrBuilt.unshift("left added");
// arrBuilt.shift("left removed");
// console.log(arrBuilt.slice(0,2));
// arrBuilt.splice(0,0, "Agya")
// arrBuilt.splice(5,0, "Anywhere")

// console.log(arrBuilt);

// map,filter,reduce
// let arr = [10,20,30]

// arr.map((number,index) => {
//     console.log(number+1);
//     console.log(index);

// })

// let ansArr = arr.map((number) => {
//     return number**2
// })

// console.log(ansArr)


// let arr = [10,20,30,11,14,17,21]

// let ansArr = arr.filter((number) => {
//     return number%2 === 0;
//     // if (number%2 == 0) {
//     //     return true
//     // }
//     // else {
//     //     return false
//     // }
// })

// console.log(ansArr)


// let arr = [1,2,3,"kunal","text", null];

// let ansArr = arr.filter((value) => {
//     // if (typeof(value) === 'string') {
//         if (typeof(value) === 'number') {
//         return true;
//     }
//     else {
//         return false;
//     }
//  })

// console.log(ansArr);


// arr = [10,20,30,40];

// let ansArr = arr.reduce((acc,curr) => {
//     return acc+curr;
// }, 0)

// console.log(ansArr);


// let arr = [1,4,2,6,8,3,9]

// arr.sort();
// arr.sort((a, b) => b - a);
// let found = arr.find(element => element > 5);
// console.log(found)
// console.log(arr.indexOf(9))



// for each loop

// let array = [5, 12, 8, 130, 44];
// let length = array.length 
// console.log("length: ", length)

// array.forEach((value, index) => {
//   console.log("Number: ",value, "Index", index)  
// })

// for(let index = 0; index <length; index++) {
//   console.log(array[index]);
// }

// for of loop

// let arr = [10,20,30,40];

// for(let value of arr) {
//   console.log(value)
// }

// let YourName = "Random_text"

// for(let val of YourName) {
//   console.log(val)
// }


// arrays with functions
// let arr = [10,20,30,40,50];
// function getSum(arr){
//   let length = arr.length;
//   sum = 0;
//   for (let index = 0; index < length; index++){
//     sum += arr[index];
//   }
//   return sum;
// }
// getSum(arr);
// console.log(sum)

let arr = [10,20,30,40,50];
function getSum(arr){
  sum = 0;
  arr.forEach(value => {
    sum += value;
  });
  return sum;
}
getSum(arr);
console.log(sum)