// class Human {
//     // Properties
//     age;       // Public
//     #wt = 58;        // private
//     ht = 183;

//     constructor(newAge, newWeight, newHeight) {
//        this.age = newAge;
//        this.#wt = newWeight;
//        this.ht = newHeight;
//     }



//     //behavior
//     #walking() {
//         console.log("I'm Walking")
//     }
//     running() {
//         console.log("I am running", this.#wt)
//     }


//     //getter
//     get fetchWeight() {
//         return this.#wt;
//     }

//     //Setter
//     set modifyWeight(val) {
//         this.#wt = val;
//     }
// }

// let obj = new Human(20,65,101);
// console.log(obj.age);
// console.log(obj.wt);
// obj.walking();
// console.log(obj.wt);
// console.log(obj.#wt);
// obj.running();


// console.log(obj.age);
// console.log(obj.ht);

// console.log(obj.fetchWeight)

// obj.walking();



// Default parameters

// function callName(inName="Kevish", surName="Choudhary") {
//     console.log("My name is :",inName, surName);
// }
// // callName("Himanshu","Choudhary");
// // callName();
// // callName("Sushil");

// function slove(val = ["Himanshu","Kevish","Sushil"]) {
//     console.log("Namaste", val);
// }
// slove();
// slove(null);    // null
// slove(undefined);   //default

function getAge() {
    return 50;
}
function utility(name = "vinnu", age = getAge()) {
    console.log(name,age);
}
utility();