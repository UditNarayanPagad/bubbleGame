let makeBubble = ()=>{
    let clutter = "";
for(let i=1;i<=133;i++){
    let rn = Math.floor(Math.random()*10);
   clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".bottom").innerHTML = clutter;
}

let timer = 60;
let score = 0;
let hitValue = 0;
let nowValue = 0;
let runTimer = ()=>{
    let timerInt = setInterval(() => {
        
        if(timer>=0){
            document.querySelector("#timerValue").innerHTML = timer;
            timer--;
        }
        else if(timer < 0){
            console.log(timer);
            document.querySelector("#bubbles").innerHTML = "<h2>Time Up!!! Please restart It</h2>";
            clearInterval(timerInt);
        }
    }, 1000);
}

let hitUp = ()=>{
    hitValue = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML = hitValue;
}

// let increaseScore = ()=>{
    
//     score += 10;
//     document.querySelector("#score").innerHTML = score;
// }
makeBubble();
runTimer();
hitUp();
console.log(hitValue);
// let clickedValue = ()=>{
//     document.querySelectorAll("#bubble").addEventListener("click",()=>{
//         console.log("clicked");
//     })

// }

// let clickedValue = () => {
//     document.querySelectorAll(".bubble").forEach(element => {
//         element.addEventListener("click", () => {
//             nowValue = element.innerHTML;
//             if(hitValue === Number(nowValue)){
//                 increaseScore();
//                 makeBubble();
//                 hitUp();
//             }
//             console.log(nowValue);
//         });
//     });
// }
// clickedValue();
// console.log(nowValue);

let increaseScore = () => {
    score += 10;
    document.querySelector("#score").innerHTML = score;
}

let clickedValue = () => {
    document.querySelectorAll(".bubble").forEach(element => {
        element.addEventListener("click", () => {
            let nowValue = element.innerHTML;
            if (hitValue === Number(nowValue)) {
                increaseScore();
                makeBubble();
                hitUp();
                clickedValue();
            }
            console.log(nowValue);
        });
    });
}

clickedValue();
