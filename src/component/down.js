import Image from "next/image";
// import React from "react";

function  Down (){
  var countDownDate = new Date("Oct 31, 2024 23:59:59").getTime();

     var x = setInterval(function() {
     
      
       var now = new Date().getTime();
         
       
       var distance = countDownDate - now;
         
       
       var days = Math.floor(distance / (1000 * 60 * 60 * 24));
       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
       
       document.getElementById("days").innerHTML = days + ":";
       document.getElementById("hours").innerHTML = hours + ":";
       document.getElementById("minutes").innerHTML = minutes + ":";
       document.getElementById("seconds").innerHTML = seconds;
         
     
       if (distance <= 0) {
         clearInterval(x);
         document.getElementById("timer").innerHTML = "EXPIRED";
       }
     }, 1000);
    return (
        <div>
          <section className="countdownTime">
            <div className="countdown-container">
              <h2>Countdown to Audition</h2>
              <div className="countdown-timer" id="timer">
                <div className="time-section">
                  <span className="time" id="days">
                    2
                  </span>
                  <hr width="15px" />
                  <p>Days</p>
                </div>
                <span className="colon">:</span>
                <div className="time-section">
                  <span className="time" id="hours">
                    02
                  </span>
                  <hr width="15px" />
                  <p>Hours</p>
                </div>
                <span className="colon">:</span>
                <div className="time-section">
                  <span className="time" id="minutes">
                    08
                  </span>
                  <hr width="15px" />
                  <p>Minutes</p>
                </div>
                <span className="colon">:</span>
                <div className="time-section">
                  <span className="time" id="seconds">
                    06
                  </span>
                  <hr width="15px" />
                  <p>Seconds</p>
                </div>
              </div>
              <Image 
                id="logoBottom"
                src="/shape-top-grey-80.png"
                alt="Logo Bottom"
                className="logoBottom"
                width={1000} height={100}
              />
            </div>
          </section>
        </div>
      );
    };
    
    export default Down;