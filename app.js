const btn1 = document.getElementById('btnradio1');
const btn2 = document.getElementById('btnradio2');
const btn3 = document.getElementById('btnradio3');
const time = document.getElementById('time')
const buttons = [btn1,btn2,btn3];
const display = document.querySelector('#time');
var stop =false;

var seconds = 1500;

const start = document.getElementById('start');

buttons.forEach(element => {
    element.addEventListener('click',(e)=>{
        const id = e.target.id;
        if(id==="btnradio1"){
        time.innerText = "25:00";
        seconds = 10;
        stop=true;
        }else if(id==="btnradio2"){
        time.innerText = "05:00";
        seconds = 300;
        }else{
        time.innerText = "15:00"
        seconds = 900;
        }
    })
});



// let seconds = parseInt(time.innerText[3]+time.innerText[4]);
//         let minutes = parseInt(time.innerText[0]+time.innerText[1]);

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

    const refresh = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if(stop){
            clearInterval(refresh);
        }
        if (--timer < 0) {
            // timer = duration;
            clearInterval(refresh);
        }
    }, 1000);

    refresh
}


start.addEventListener('click',(e)=>{
    start.innerText = "STOP" ;
    startTimer(seconds, display);
})
