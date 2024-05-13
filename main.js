// reset
'use strict';

let count = 10;
const sec = 1;
const message = document.querySelector('h1');
const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');


btnStart.addEventListener('click', function(){
    const clock = setInterval(countDown, sec * 1_000);

    function countDown() {
    console.log(count);

    if (count === 0) {
        message.textContent = 'Buon Anno!';   
    } else{
        message.textContent = count;
    }

    if (count === 0) clearInterval(clock);

    count--
}

});


