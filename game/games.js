let block = document.getElementById("block");
let kc = document.getElementById("kc");
let ball = document.getElementById("ball");
let jumping = 0;
let count = 0;


//random khoảng cách ngẫu nhiên
kc.addEventListener('animationiteration', () => {
    let random = -((Math.random()*300)+150);
    kc.style.top = random + "px";
    count++;
});

setInterval(function(){
    let ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
     if(jumping===0) {
         ball.style.top = (ballTop + 3) + "px";
     }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let kcTop = parseInt(window.getComputedStyle(kc).getPropertyValue("top"));
    let cTop = -(500-ballTop);
    if((ballTop>480)||((blockLeft<20)&&((cTop<kcTop)||(cTop>kcTop+150)))){
        alert("Game over. Score: "+(count-1));
        ball.style.top = 100 + "px";
        count=0;
    }
},10);

//
function evt(){
    jumping = 1;
     let jumpCount = 0;
    let jumpInterval = setInterval(function(){
        let ballT = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
         if((ballT>6)&&(jumpCount<15)){
        ball.style.top = (ballT-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
             jumpCount=0;
        }
        jumpCount++;
    },10);
}