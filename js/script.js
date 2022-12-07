console.log('JS OK')

/*  Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Non complichiamoci la vita con soluzioni complesse: la strada semplice è quasi sempre la migliore 
*/


// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0)
// }
// console.log(i)

const fizzbuzzElement = document.getElementById('fizzbuzz')

// 1. utilizzo un ciclo che va da 1 a 100;

for (let i = 1; i <= 100; i++) {
    let name = "FizzBuzz";
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log(name);
    } else if (i % 3 === 0) {
        name = "Fizz";
        console.log(name);
    } else if (i % 5 === 0) {
        name = "Buzz";
        console.log(name);
    } else {
        console.log(i);
    }
}


// if (i % 3 == 0) {
//     fizzbuzzElement.write("Frizz");
// } else if (i % 5 == 0) {
//     i = "Buzz";
// } else if ((i % 3 != 0) && (i % 5 != 0)) {
//     i = "FrizzBuzz";
// }




    // if (i % 3 === 0) {
    //     name = "Frizz";
    //     console.log(name);
    // } else if (i % 5 === 0) {
    //     name = "Buzz";
    //     console.log(name);
    // } else if (i % 3 && i % 5) {
    //     name = "FrizzBuzz"
    //     console.log(name);
    // }