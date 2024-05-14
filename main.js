// reset
'use strict';


// VARIABILI
let clock = null;
const countDown = 10;
const sec = 1;
const message = document.querySelector('h1');
const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');

//ascolto il bottone stop per fermare il countdown e stampare Buon Anno:
btnStop.addEventListener('click', function(){

    clearInterval(clock);
    message.textContent = 'Buon Anno!';
    clock = null;

console.log('interropi countdown');
});

// ascolto il testo start per far partire il timer di 10 secondi, al termine del quale stampo Buon Anno!
btnStart.addEventListener('click', function(){
    
    // per non fare partine altri timer. Lo assegno fuori dal setInterval per far funzionare il timer:
    if(clock !== null) {
        console.log('non puoi iniziare un nuovo timeout');
        return;
    };

    clock = setInterval(messageOutput, sec * 1_000);

    let count = countDown;
    console.log({clock});

    // definisco la funzione:
    function messageOutput() {
    console.log(count);
    //  if (clock !== undefined) return
     if (count === 0) {
        clearInterval(clock);
        clock = null;
        message.textContent = 'Buon Anno!';   
    } else {
        message.textContent = count;
    }

    count--
    }

});

// FINE
