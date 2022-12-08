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

const fbElement = document.getElementById('fizzbuzz');
// const list = document.createElement('ul');

// 1. utilizzo un ciclo che va da 1 a 100;
let result = '';
let resultHtml = '';

for (i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz";
        console.log(result);
    } else if (i % 5 === 0) {
        result = "buzz";
        console.log(result);

    } else if (i % 3 === 0) {
        result = "Fizz";
        console.log(result);

    } else {
        result = i;
        console.log(result);

    }
    resultHtml += "<p>" + result + "</p>";
}
fbElement.innerHTML += (resultHtml);




















    // for (let i = 1; i <= 100; i++) {
    //     const fizz = 'Fizz';
    //     const buzz = 'Buzz';
    //     const fizzBuzz = 'FizzBuzz';
    //     const name = fizz + buzz + fizzBuzz;
    //     const number = i;
    //     const listElement = document.createElement('li')

    //     if ((i % 3 === 0) && (i % 5 === 0)) {
    //         fizzBuzz;
    //         console.log(fizzBuzz);
    //     } else if (i % 3 === 0) {
    //         fizz;
    //         console.log(fizz);
    //     } else if (i % 5 === 0) {
    //         buzz;
    //         console.log(buzz);
    //     } else {
    //         number;
    //         console.log(number);
    //     }
    //     listElement.append(i);
    //     list.appendChild(listElement);
    // }
    // fbElement.appendChild(list);


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