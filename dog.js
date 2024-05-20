class Dog {
    imePsa = "Rex";
    vrsta = "Seoski pas";
    godine = 1;
};

class GoldenRetriever extends Dog {
    constructor(godine, vrsta) {
        super(); // poziva konstruktor klase koju nasljeđuje, u ovom slucaju klase Dog
        this.godine = godine;
        this.vrsta = vrsta;
    }
}

const dog1 = new Dog();
const dog2 = new GoldenRetriever(10, "Zlatni retriever");

console.log(dog1);
console.log(dog2);

// ZADACI!!!!!

//1. Napisite Promise koji čeka funkciju
//  i na resolved reagira sa console.log-om na vrijednosti vracene vrijednosti,
// a na reject reagira sa console.log-om string "Oh no!"


//2. Ako vec niste, prepisite sve funkicje u arrow funkcije.

/* function getX(){
    return Math.random() >= 0.5;
} */

const getX = () => Math.random() >= 0.5;

let ispisi = new Promise((resolve, reject) => {
    //console.log("Pozvan promise object");
    let x = getX();

    if (x) {
        return setTimeout(() => resolve(x), 1000);
    }
    return setTimeout(reject, 1000);
})
    .then((vrijednost) => console.log("Neka vrijednost=" + vrijednost))
    .catch(() => console.log("Oh no!"));
