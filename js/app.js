
//countdown

let countDate = new Date(' Nov 5, 2022 00:00:00').getTime();

function countdown(){

    let now = new Date().getTime();
    let tm = countDate - now;
   

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    
    
    let d = Math.floor( tm / (day));
    let h = Math.floor((tm % (day)) / (hour));
    let m = Math.floor((tm % (hour)) / (minute));
    let s = Math.floor((tm % (minute)) / second);


    document.getElementById('day').innerHTML = d;
    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('second').innerHTML = s;

};

setInterval(function(){
    countdown();
}, 1000);

