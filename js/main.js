// PASSEGGERO PREZZO E CHILOMETRI
var passegero = prompt('Inserisci la tua età');
var numeroKm = prompt('inserisci il numero di chilometri');
var prezzoNormalTicket = (0,21 * numeroKm);

if (passegero < 18){
    prezzoNormalTicket = (0,17 * numeroKm);
}
if (passegero > 65){
    prezzoNormalTicket = (0,13 * numeroKm);
}

document.getElementById('normalticketprice').innerHTML = 'prezzo del biglietto: ' + prezzoNormalTicket + '€';


