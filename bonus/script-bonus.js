var priceKm = 0.21;
var discountYoung = 0.8;
var discountOld = 0.6;

do {
  var km = parseInt(prompt("Quanti kilometri dovrà percorrere?"));
  var age = parseInt(prompt("Quanti anni ha?"));
  var price;
  var priceSale;

} while ((!isNaN(km) && !isNaN(age)) == false)

  if (age < 18) {
    price = parseFloat(km * priceKm).toFixed(2) ;
    priceSale = parseFloat(km * priceKm * discountYoung).toFixed(2) ;
    document.getElementById("sale").innerHTML = "Sconto per minorenni : 20%";
  } else if (age < 65) {
    price = km * priceKm;
    priceSale = km * priceKm;
    document.getElementById("sale").innerHTML = "Sconto per maggiorenni under 65 : 0%";
  } else {
    price = km * priceKm;
    priceSale = km * priceKm * discountOld;
    document.getElementById("sale").innerHTML = "Sconto per OVER 65 : 40%";
  }


  document.getElementById("ticket").innerHTML = "Prezzo biglietto pieno:" + price + "€." ;
  document.getElementById("ticket-prize").innerHTML = "Prezzo biglietto scontato:" + priceSale + "€." ;
