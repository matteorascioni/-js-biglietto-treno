// PASSEGGERO
var passegero = prompt('Inserisci la tua età');

// CHILOMETRI
var numeroKm = prompt('inserisci il numero di chilometri');

// PREZZO ED ETÁ PASSEGERI
var prezzoTicket = (0,21 * numeroKm);
var passegeroGiovane = prezzoTicket;
var passeggeroAnziano = prezzoTicket;

// PASSEGERO GIOVANE
if (passegero < 18){
    prezzoTicket = passegeroGiovane - (prezzoTicket/100*20);
}
// PASSEGERO ANZIANO
if (passegero > 65){
    prezzoTicket = passeggeroAnziano - (prezzoTicket/100*40);
}

document.getElementById('normalticketprice').innerHTML = 'prezzo del biglietto: ' + prezzoTicket + '€';


