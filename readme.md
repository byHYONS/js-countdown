# ESERCIZIO: Count Down

> [!NOTE]
>
> repo: js-countdown

- Simulare un count down di 10 secondi che alla fine dice **"Buon anno!"**
- Potete stampare il messaggio in pagina con un semplice alert.
#### Bonus 1:
Mostrate il conteggio alla rovescia in pagina;
#### Bonus 2:
Aggiungete un bottone che interrompe il count down e mostra il messaggio.

## Svolgimento:
1. dichiaro variabili utility, andando a leggere nel DOM gli elementi che mi servono per far partire il conto alla rovescia, il bottone per interrompere il timer e dove verrà visualizzato il countdown e il messaggio;

2. Assegno una variabile cno valoer `null`, la stessa variabile che assegnerò a `setInterval` questo per non fare partine altri timer. Lo assegno fuori dal setInterval in modo che possa funzionare il timer:
```
if (clock !== null) return;
```

3. vado in asscolto del bottone `Inizia`, dove farò partire un countdown adoperando `setInterval()`con cadenza di un secondo, imposterò un conto `= 10` e lo decrementerò con `count--`, tramite una istruzione condizionale manderò a schermo il countdown e/o il messaggio, inoltre, quando `count === 0` interromperò la funzione:
```
if (count === 0) {
        clearInterval(clock);
        message.textContent = 'Buon Anno!';   
    } else {
        message.textContent = count;
    }
```

4. vado in ascolto del bottone `Interrompi` dove per mezzo della funzione `clearInterval()` andrò ad interrompere il countdown e mandero a schermo il messaggio:
```
    clearInterval(clock);
    message.textContent = 'Buon Anno!';
```

##### FINE
