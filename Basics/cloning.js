let sour = {
    age:29,
    ht:183,
    wt:60
};

sour.body_count = 2;

// let dest = sour;

// cloning pt 1 

// let dest = {...sour}


// cloning pt 2

// let dest = Object.assign({},sour)


// cloning pt 3

let dest = {};

for(let key in sour) {
    let newKey = key;
    let newValue = sour[key];

    dest[newKey] = newValue;
}



console.log(sour)
console.log(dest)