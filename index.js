let myArray = ["Ana", "Dina", "Marko"];

myArray.forEach(function (element) {
    console.log(element);
    return element;
});

console.log("---------------");

myArray.forEach((element) => {
    console.log(element);
    return element;
});