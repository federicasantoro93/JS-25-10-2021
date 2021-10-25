/*  
  ESERCIZI SULLO SCOPE
  ATTENZIONE: provare a prima dare prima la risposta e solo dopo testare il codice!!
  Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'.
*/

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?
// RISPOSTA: 

const PI = 3.14;

console.log(PI);    //console:3.14 stampa PI 

if (PI >= 3) {
  console.log(PI);  //console:3.14 perchè la condizione si verifica (3.14>=3)
}

// Es. 2: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA:

var favColour = "violet";
let monthsInAYear = 12;

if (true) {
  var favColour = "violet";
  console.log("Il mio colore preferito è:", favColour); //console:  Il mio colore preferito è: violet perchè la variabile è definita
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");  //console: Ci sono 12 mesi in un anno, perchè alla variabile months InYear è assegnato il valore 12

// Es. 3: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: moreIngredients non è definito 

function makePizza(moreIngredients) {
  let theSecond = "Sugo di pomodoro freschissimo";
  // { ... }
  console.log(theSecond + ", " + moreIngredients);  //console: Sugo di pomodoro freschissimo,rucola, prosciutto crudo e scaglie di grana.,perchè il console.log è all'interno della funzione dove si trova anche la variabile the Second (definita localmente)
  return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}

if (true) {
  makePizza("rucola, prosciutto crudo e scaglie di grana.");
  console.log("Il secondo ingrediente necessario: ", theSecond);    //console: ? la variabile theSecond è definita localmente dentro la funzione e non globalmente nè localmente dentro le istruzioni condizionali perciò è come se non fosse definita
}
