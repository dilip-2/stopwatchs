let seconds = 0;
let minutes = 0;
let timer;     //this variable is used to store Interval id which can be used to clearInterval
let checkStart = false;    // this variable will keep track to check if start is pressed more than once even when stopwatch watch is already runnning

document.querySelector('#start').addEventListener('click', function () {  // start function
  if (!checkStart) {
    timer = setInterval(function () {   //this setInterval method call the function we wrote per 1000ms as we have given
      seconds++;                          //timer stores the Interval id
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      document.querySelector('.stopwatch').style.borderColor="green";  //green color for start
      document.querySelector('.minutes').textContent = minutes ;
      document.querySelector('.seconds').textContent = seconds;  //per seconds the it changes the time
    }, 1000);

    checkStart = true;         
  }
});

document.querySelector('#stop').addEventListener('click', function () { // stop function
  clearInterval(timer);    //this clearInterval method clears the current IntervalId
  document.querySelector('.stopwatch').style.borderColor="yellow";
 
  checkStart = false;  
});

document.querySelector('#reset').addEventListener('click', function () {// this is reset after pressing it everything comes to what is default
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  document.querySelector('.stopwatch').style.borderColor="red";
  document.querySelector('.minutes').textContent = minutes;
  document.querySelector('.seconds').textContent = seconds;
  checkStart = false;
});