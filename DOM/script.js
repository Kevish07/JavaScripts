// window.open
// window.close

//  To fetch html of web
// document

// function changeText() {
//     let pone = document.getElementById("pone");
//     pone.textContent = "Changed Para"
// }
// let pone = document.getElementById("pone");
// pone.addEventListener("click", changeText)


// function changeTextagain() {
//     let ptwo = document.getElementById("ptwo");
//     ptwo.textContent = "Removing Para"
// }
// let ptwo = document.getElementById("ptwo");

// ptwo.addEventListener("click", changeTextagain)

// ptwo.removeEventListener("click", changeTextagain)


function get_alert(event) {
    if(event.target.nodeName === "SPAN") {
        alert("You have clicked on :- "+ event.target.textContent);
    }

}
// let paras = document.querySelectorAll("p");


// for (let i=0; i<paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener("click", get_alert);
// }

let taking_Div = document.getElementById("parentd");

document.addEventListener("click", get_alert);