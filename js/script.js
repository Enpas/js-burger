// dichiaro le variabili references
var priceElement = document.getElementById("price");
var nameUser = document.getElementById('name');
var ingredients = document.getElementsByClassName("ingredient-checkbox");
var button = document.getElementById('button');
var coupon = document.getElementById('coupon');

// dichiaro le variabili settings
var defaultPrice = 50;
var discount = 0.2;
var arrCoupons = ['sconto2021', 'sconto-bool'];


/* Eventi */


// prezzo di default del burger ($50)
writePrice(defaultPrice, priceElement);

button.addEventListener("click", nameCheck);


/* Funzioni */


// funzione che controlla il nome e ne varifica la presenza
function nameCheck() {
  var burgerName = nameUser.value.trim();
  // controllo la validità del nome, quindi che l'utente non abbia inserito degli spazi vuoti
  if (burgerName.length === 0) {
    alert("inserisci il nome del tuo burger:");
  } else {
    priceCalc(defaultPrice, priceElement);
  }
}

// prezzo di default del burger con l'aggiunta degli ingredienti
function priceCalc(value, target) {
  var ingredientsPrice = 0;
  // creo un ciclo for che scorre all'interno dell'array salvando ogni elemento nella variabile ingredient. Mentre il ciclo for gira controllo se l'elemento dell'array precedentemente salvato in ingredient ha la proprietà checked === true. Se la possiede viene sommato al prezzo totale degli ingredienti
  for(var i = 0; i < ingredients.length; i++){
    var ingredient = ingredients[i];
    if(ingredient.checked === true){
      ingredientsPrice += parseInt(ingredient.value);
    }
  }
  // prezzo totale del burger(con ipotetici ingredienti)
  var totalPrice = defaultPrice + ingredientsPrice;
  // invoco la funzione discountCheck per controllare se si può applicare uno sconto e lo salvo in una variabile
  var discountedPrice = discountCheck(totalPrice, discount);
  // invoco la funzione writePrice per comunicare il prezzo totale
  writePrice(discountedPrice, priceElement);
}

// utilizzando la funzione discountCheck controllo se i valori dell'arrCoupons sono stati inseriti correttamente, se corretti applico uno sconto e restituisco il valore scontato, altrimenti non applico nessuno sconto e il burger avrà il prezzo di default con aggiunta degli ingredienti(se aggiunti)
function discountCheck(value, disc) {
  if(arrCoupons.includes(coupon.value) === true){
    value -= value * disc;
    return value;
  } else {
    return value;
  }
}

// funzione per il prezzo totale
function writePrice(value, target){
  target.innerHTML = value.toFixed(2);
}