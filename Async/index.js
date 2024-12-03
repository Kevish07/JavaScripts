// async function getData() {
//     setTimeout(() => {
//         console.log("This text occurred after 2 sec.")
//     }, 2000);
    
// }
// getData();



// async function getData() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');

//     let data = await response.json();

//     console.log(data);
// }
// getData()



async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');

    let data = await response.json();

    console.log(data);
}
getData()