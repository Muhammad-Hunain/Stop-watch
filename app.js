mlsec =0;
secnd = 0;
mint= 0;

var msec= document.getElementById('msec');
var sec= document.getElementById('sec');
var min= document.getElementById('min');
var last = document.getElementById('get');

var interval;
const timer =()=>{
        mlsec++;
        msec.innerText = mlsec;
        if(mlsec >=100){
            mlsec =0;
            secnd++
            sec.innerText = secnd;
        }
        else if(secnd>=60){
            secnd=0;
            mint++;
            min.innerText = mint
        }    
}
const start = () =>{
    interval = setInterval(timer,10)
    // document.getElementById("strtbtn").innerText = "stop"
    // document.getElementById("resbtn").innerText = "lap"
    document.getElementById("strtbtn").disabled = true;
    document.getElementById("stopbtn").disabled = false;
}
const stop = () =>{
    clearInterval(interval);
    document.getElementById("strtbtn").disabled = false;
    document.getElementById("stopbtn").disabled = true;
}
const reset = () => {
   
    if(mlsec>0 || secnd > 0 || mint>0){
    last.innerText = `lastTimeOut ${mint}:${secnd} :${mlsec}`;      
    }
    mlsec =0;
    secnd=0;
    mint=0;
    
    msec.innerText = mlsec;
    sec.innerText = secnd;
    min.innerText = mint;
    stop();
}
    
