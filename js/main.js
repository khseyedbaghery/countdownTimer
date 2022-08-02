const dateInput = document.querySelector('.input-date');
const second = document.querySelector('.second');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');
const day = document.querySelector('.day');

dateInput.addEventListener('change',cunterData);
let timeInterval;

let getDateLate = localStorage.getItem("setDateLate") || false ;
if(getDateLate){
    
    dateInput.valueAsDate = new Date(getDateLate);
    endDate(getDateLate)
    cunterData();
}

function cunterData(){

    // e.preventDefault();
    clearInterval(timeInterval);

    let deferance = calculateTime();
    if(deferance > 0){
        timeInterval = setInterval(calculateTime, 1000)
    }
    else{
        clearInterval(timeInterval);
    }
}

function endDate(myDate){
    
    // inputed Date:
    let dateLate = new Date(myDate);
    // let dateLate = dateInput.valueAsDate;
    localStorage.setItem("setDateLate",dateLate);
 
    let dateLateMss = Date.parse(dateLate);
    return dateLateMss;
}

function calculateTime(){
    // Now Date:
    let  dateNow =  new Date();
    let dateNowMs = Date.parse(dateNow);

    let dateLateMs = endDate(dateInput.value);
    
    //console.log("now date:"+ dateNow);
    //console.log("late date:"+dateInput.value);
    
    let deferanceTime = dateLateMs - dateNowMs ;

    second.innerText =  Math.floor((deferanceTime/(1000)) % 60) ;
    minute.innerText =  Math.floor((deferanceTime/(1000 * 60)) % 60) ;
    hour.innerText   =  Math.floor((deferanceTime/(1000 * 60 * 60)) % 24) ;
    day.innerText    =  Math.floor((deferanceTime/(1000 * 60 * 60 * 24)) % 366) ;

    return deferanceTime;
}