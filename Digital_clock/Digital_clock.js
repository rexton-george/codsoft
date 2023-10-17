 var clock = document.getElementById("clock");
 function Clock() {
    const now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    if(hours == 1 && hours == 13){
        hours = 1
    }
    if(hours == 2 || hours == 14){
        hours = 2
    }
    if(hours == 3 || hours == 15){
        hours = 3
    }
    if(hours == 4 || hours == 16){
        hours = 4
    }
    if(hours == 5 || hours == 17){
        hours = 5
    }
    if(hours == 6 || hours == 18){
        hours = 6
    }
    if(hours == 7 || hours == 19){
        hours = 7
    }
    if(hours == 8 || hours == 20){
        hours = 8
    }
    if(hours == 9 || hours == 21){
        hours = 9
    }
    if(hours == 10 || hours == 22){
        hours = 10
    }
    if(hours == 11 || hours == 23){
        hours = 11
    }
    if(hours == 12 || hours == 24){
        hours = 12
    }
    const timeString = `${hours}:${minutes}:${seconds}`;
   
    clock.textContent = timeString;
}

setInterval(Clock, 1000);
Clock();