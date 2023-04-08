function calltime() {
    let time= new Date();
    let hrs=time.getHours();
    let min= time.getMinutes();
    let secs= time.getSeconds(); 
    let session= document.querySelector("#am");
    let img= document.getElementById("morn_img");
    if(hrs >= 12) {
        session.innerText="PM";
    }
   
    let text2= document.getElementById("breakfast");

     if(hrs>=4  && hrs<12) {
        text2.innerText;
       
    }
    else if (hrs>=12 &&  hrs <16) {
        text2.innerText="LET'S HAVE SOME LUNCH !!";
       
    }
    else if ( hrs>=16 &&  hrs < 20) {
        text2.innerText= "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
       
    }
    else {
        text2.innerText= "CLOSE YOUR EYES AND GO TO SLEEP";
       
    }
    if (hrs > 12 ) {
        hrs= hrs - 12;
     }

     hrs = hrs < 10 ? "0" + hrs : hrs;
     min = min < 10 ? "0" + min : min;
     secs = secs < 10 ? "0" + secs : secs;
     
     
document.getElementById("hrs").innerText= hrs;
document.getElementById("mins").innerText=min;
document.getElementById("secs").innerText= secs;
}
setInterval(() => {
    calltime();
}, 1000);

let t= document.getElementById("mrngtext");
let img= document.getElementById("morn_img");

let morning =document.getElementById("mrngtime")
let afternoon = document.getElementById("lunchtime")
let evening = document.getElementById("naptime")
let night = document.getElementById("sleeptime")

function callMe() {

    let time= new Date();
    let hrs= time.getHours();

    if (hrs===parseInt(morning.value) ) {
        
        t.innerHTML= "GOOD MORNING!! WAKE UP !!";
        
        img.style.backgroundImage = "url(morning_image.svg)";
    }
    else if  (hrs===parseInt(afternoon.value)) {
    
        t.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP ";
        
        img.style.backgroundImage = "url(lunchtime_image.svg)";
    } 
    else if  (hrs===parseInt(evening.value)) {
        
        t.innerHTML = "GOOD EVENING !! ";
        
        img.style.backgroundImage ="url(evening_image.png)";

    }   
     else if (hrs===parseInt(night.value)) {
        
        t.innerHTML = "GOOD NIGHT !! ";
        
        img.style.backgroundImage = "url(sleeptime_image.svg)";

    }

    let t1= mrngtime.options[mrngtime.selectedIndex].textContent;
    let timeText1= document.getElementById("btime1");
    timeText1.textContent=t1;
    
   
    let t2= lunchtime.options[lunchtime.selectedIndex].textContent;
    let timeText2= document.getElementById("btime2");
    timeText2.textContent = t2;
    
    
    let t3 = naptime.options[naptime.selectedIndex].textContent;
    let timeText3= document.getElementById("btime3");
    timeText3.textContent = t3;
    
    
    let t4 = sleeptime.options[sleeptime.selectedIndex].textContent;
    let timeText4= document.getElementById("btime4");
    timeText4.textContent = t4;
   
    
    
    

}
