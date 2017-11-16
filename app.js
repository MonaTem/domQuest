var cash = 0;

document.getElementById("smallButton").addEventListener("click", function(){
    let smallAmt = Math.floor(10 * Math.random());
    if (smallAmt < 10) {
       smallAmt = 10;
    }
    cash = cash + smallAmt;
    document.querySelector("span").innerText = cash;
});

document.getElementById("longButton").addEventListener("click", function(){
    let longAmt = Math.floor(50 * Math.random());
    if (longAmt < 30) {
       smallAmt = 30;
    }
    if (longAmt > 50) {
        longAmt = 50;
    }
    cash = cash + longAmt;
    document.querySelector("span").innerText = cash;
});

document.getElementById("bossButton").addEventListener("click", function(){
  let bossAmt = Math.floor(100 * Math.random());

 if (bossAmt < 70) {
     bossAmt = 70;
    }

 if (bossAmt > 100) {
     bossAmt = 100;
    }

    cash = cash + bossAmt;
    document.querySelector("span").innerText = cash;
});
