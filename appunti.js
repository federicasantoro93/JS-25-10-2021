/*
Javascript definisce la componente logica.
Chiamata ipiai? Prendo da un server dei dati.
JS è un linguaggio di programmazione che permette di svolgere molte funzioni, ma solleva degli errori e delle problematiche.
Nel flusso di programmazione si colloca l'argomento più importante nella defìfinizione del programma: lo scope.
Lo scope è quel luogo entro il quale le vriabili sono visibilie possono essere richiamate. ne abbiamo di due tipi:
- globale(che riguarda l'intero file 'script.js');
- locale (che definisce una porzione di codice).



//var giorniSettimana = 7;

//--------------------

let daysInAWeek = 7;

if(daysInAWeek === 7) {


    console.log("Ciao");
    console.log(giorniSettimana);
}

//console.log(giorniSettimana);

//Var a differenza di let definisce uno scope globale
//let definisce una variabile che può cambiare il proprio valore
// Const crea un contesto più legato al codice ed evita di sollevare eccezioni e problemi
//Blocco codice {} 
//(MDN firefox)
//Tutto quello che è definito dal padre (globale) può essere richiamato dal figlio (scope locale - blocco codice)

//---------------------------

let daysInAWeek = 7;

if(daysInAWeek === 7) {
    let months = 12;
    

    console.log("Ciao");
    console.log(months);
}

console.log(months);

//months non è stato definito a livello globale ma locale per cui il console.log non lo stamperà

//------------------------

//se metto var al posto di let...

let daysInAWeek = 7;

if(daysInAWeek === 7) {
    var months = 12;
    

    console.log("Ciao");
    //console.log(months);
}

console.log(months);

// ...il console.log la stamperà

//-----------------------

//I singoli script.file rappresentano uno scope globale ma...
//...Nel momento in cui lo andiamo ad importare in un altro file ?

/------------------------

//Scope nelle funzioni

const pizza

//Lo scope comincia con il blocco codice {}
//Lo scope viene definito a livello locale
//...Quindi se il consol.log viene fatto fuori non lo stamperà

//Concetto di retrocompatibilità: il codice viene rimpiazzato da altro
//ECMAScript 6  JS che diventa il componente fondamentale delle applicazioni
//ES6 è lo standard che ne definisce il linguaggio 
// var è stato deprecato da EcmaScript 6 
//Per il concetto di retrocompatibilità è comunque possibile continuare ad atillizzarlo
//Il linguaggio di programmazione è la serie di parole chiave ma...
// il modo in cui viene  utilizzato Js è definito da ES6 
//ES6 ha ribaltato tutte le carte in tavola, introducendo per esempio let e const e deprecando var

//-----------------------

// La funzione è un insieme (di istruzioni) di codice
//Le funzioni sono come delle skills

function getHour(hour, min, sec){
    console.log(hour, min, sec);
}

getHour(10, 37, 40);
console.log(hour);

//Iparametri sono delle variabili che però possono anche non essere definiti all'esterno
//'hour, min, sec' sono parametri ma anche delle variabili definite e chiamate all'interno della funzione e hanno uno scope...

//function getHour(hour, min, sec){
    //console.log(hour, min, sec);
//}

//getHour(10, 37, 40);
//console.log(hour); <--

//... Se facciamo il console log di hour all'esterno della funzione scopriamo che lo scope è locale

//------------

let hour;
let min;
let sec;

//function getHour(hour, min, sec){
//   console.log(hour, min, sec);
//}

getHour(10, 37, 40);
console.log(hour);

//In questo caso ,non avendo assegnato un valore, il console.log darà undefined

//-----------------------

let hour = 5;
let min;
let sec;

//function getHour(hour, min, sec){
//   hour = 25;
//   console.log(hour, min, sec);
//}

console.log(hour);          console: 5
getHour(10, 37, 40);        console: 25 49 11
console.log(hour);          Console:5

//In questo caso la funzione si avvale prima delle variabili interne e poi di quelle esterne
//Quando richiamiamo una funzione le variabili interne avrranno la precedenza su quelle esterne....
//... perchè le stiamo andando a richiamare all'interno della funzione

//---------


let hour = 5;
let min;
let sec;

//function getHour(hour, min, sec){
//   hour = 25;
//   console.log(hour, min, sec);
//}


getHour(10, 37, 40);       // console: 25 49 11

if (hour){
    console.log("Stampa")   //onsole: Stampa
}

//Poichè c'è un valore viene considerato come vero
//Anche le stringhe vengono considerate vere...
//...Infatti i valori di input di un prompt vengono consierati sempre veri
//"NaN, 0, udefined" sono considerati sempre falsi 

//--------------


//L'hoisting ci dice che assegnamo una variabile nella prima riga di codice arrivati alla riga n+x
//può fare il console log perchè la variabile è stata precedentemente definita
//Se io definisco la variabile dopo il console log...

console.log(myNum);

let myNum = 7;


//l'hoisting 
//l'engin rappresenta il valore che fa giare il programma
//All'interno della ram c'è un luogo fisico dove js va ad archiviare e processare i dati: stack
//Ogni volta che una condizione si concretizza si procede dall'alto verso il basso per svuotare lo stack
//var non risponde a questo comportamento in modo preciso

//---------


let helloWorld = "    Hello,     World   !";

console.log(helloWorld);                             //console:    Hello,     World   !
console.log(helloWorld.replace("World", "guys"));     // console:   Hello,     guys    !
console.log(helloWorld.replaceAll(" ", ""));         //console: Hello,World!

//-------

//Le funzioni possono essere definite ovunque all'interno del codice poichè verranno spostate all'inizio dell'hosting


*/