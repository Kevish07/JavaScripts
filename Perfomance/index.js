//  Code 1

// const t1 = performance.now();

// for (i=1; i<=100; i++) {
//     let para = document.createElement("p");
//     para.textContent = "This is para no :- " + i;
//     document.body.appendChild(para);

// }

// const t2 = performance.now();

// console.log("Total time taken by Code 1 is :- " + (t2-t1));

// Code 2

// const t3 = performance.now();

// let myDiv = document.createElement("div");

// for (i=1; i<=100; i++){
//     let para = document.createElement("p");
//     para.textContent = "This is para no :- " + i;
//     myDiv.appendChild(para);
// }

// const t4 = performance.now();

// console.log("Total time taken by Code 2 is :-" + (t4-t3));


// Best code

let fragment = document.createDocumentFragment();

for (i=1; i<=100; i++){
    let para = document.createElement("p");
    para.textContent = "This is para no :- " + i;

    fragment.appendChild(para);
}

document.body.appendChild(fragment);