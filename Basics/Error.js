// Compilation err

// console.log("f)


// Run-time err

// console.log(x)


// Error Handling

// try{
//     console.log("Going everything well");

//     console.log(did);

//     console.log("No error detected");

// }
// catch (err) {
//     console.log("Ohh no you did an error");

//     console.log("This is your error :-",err);
// }
// finally {
//     console.log("Welcome this is mandatory")
// }

// custom error

try {
    console.log(x);
}
catch (err){
    throw new Error("Please define variable");
}

let err_Code = 100;
if (err_Code == 100)  {
    throw new Error("Invalid Json")
}