/*David-WebD, 03/11/2022*/


window.onload = () => {
  
  var tens = 00;
  var seconds = 00; 
  var minutes = 00;
  var appendMinutes = document.getElementById("minutes")
  var appendSeconds = document.getElementById("seconds")
  var appendTens = document.getElementById("tens")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = () => {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = () => {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = () => {
     clearInterval(Interval);
    minutes = "00";
  	seconds = "00";
    tens = "00";
    appendMinutes.innerHTML  = minutes;
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }
  
   
  
  function startTimer() {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
    if (seconds >= 60) {
        console.log("minutes");
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
  }
}



