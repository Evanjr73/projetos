let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');


function increment() {
	count++;
    if (count >= 0) {
        let CURRENT_NUMBE = document.getElementById('currentNumber').style.color='black' 
         CURRENT_NUMBE.innerHTML = count;
         
     }
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {

	count--;
    if (count < 0) {
       let CURRENT_NUMBE = document.getElementById('currentNumber').style.color='red' 
        CURRENT_NUMBE.innerHTML = count;
        
    }
	CURRENT_NUMBER.innerHTML = count;
}

function test() {
	kdowkdpo;
}