var PRICEKM = 0.21; //costo unitario €/km
var DISCOUNT_YOUNG = 0.2; //20% di sconto per minorenni
var DISCOUNT_OLD = 0.4;//40% di sconto per over 65
var AGE_YOUNG = 18;//Età massima per minorenni
var AGE_OLD = 65; //Età minima per gli OVER 65
var N_TRUCKS = 15;//massimo numero di carrozze nel treno
var CP_CODE = 10000;// massimo valore ottenibile con il cp code
var name;
var km;
var age;
var price;
var message ="";
var nTruck;
var cpCode;
submitElement = document.getElementById("submit");
cancelElement = document.getElementById("cancel");


//Evento generatore del biglietto del treno
submitElement.addEventListener("click",function(){
  //rendere visibile il biglietto
  document.getElementById("hidden").style.display = "block";
  //acquisizione degli input dati dall'utente e trasformazione in tipi utili all'algoritmo di calcolo
  name=document.getElementById("nome-cliente").value;
  km = document.getElementById("km-percorsi").value;
  var e = document.getElementById("eta-cliente");
  age = e.value;

  console.log(name,km,age);

  km = parseInt(km);
  age = parseInt(age);
  nTruck = Math.round(((Math.random()*N_TRUCKS)+1));
  cpCode = Math.round((Math.random()*CP_CODE));
  cpCode = cpCode.toString();
  cpCode = cpCode.padStart(5, "0");

  console.log(name,km,age,nTruck,cpCode);

  //Algoritmo di calcolo del prezzo del biglietto e sconti da applicare
  if (age == 1) {
    price = km * PRICEKM * (1 - DISCOUNT_YOUNG);//.toFixed(2) ; //price -= price * DISCOUNT_YOUNG
    message = "Sconto Minorenne";
  } else if (age == 2) {
    price = km * PRICEKM ;
    message = "Nessuno Sconto";
  } else if (age == 3){
    price = km * PRICEKM * (1 - DISCOUNT_OLD);//.toFixed(2) ;
    message = "Sconto Over 65";
  }

  //stampa dei dettagli sul biglietto
  document.getElementById("nome-passeggero").innerHTML = name;
  document.getElementById('message').innerHTML = message;
  document.getElementById("n-carrozza").innerHTML = nTruck;
  document.getElementById("cp-codice").innerHTML = cpCode
  document.getElementById("ticket-prize").innerHTML = price.toFixed(2) + "€" ;

});

//Evento di cancellazione del form
cancelElement.addEventListener("click",function() {

  //Nascondo nuovamente il biglietto
  document.getElementById("hidden").style.display = "none";

  //Azzero le variabili in gioco
  km="";
  name="";
  age= 0;

  //Stampo il form pulito, pronto per essere ricompletato
  document.getElementById('km-percorsi').value = km;
  document.getElementById('nome-cliente').value = name;
  document.getElementById("eta-cliente").value = age;

});
