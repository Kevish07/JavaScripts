function outerFunction() {
    text = "Binding text";

    function innerFunction(){
        console.log(text);
    }

    return innerFunction;
}

let result = outerFunction();

result();