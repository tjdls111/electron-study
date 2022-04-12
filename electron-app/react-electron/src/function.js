function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

function randomPosition(img, imgWidth,imgHeight){
    const xPos=getRandomNum(0,window.innerWidth-imgWidth);
    const yPos=getRandomNum(150,window.innerHeight-imgHeight);
    img.style.transform=`translate(${xPos}px, ${yPos}px)`;
    img.style.display='inline';
    console.log(`${xPos}, ${yPos}`);
}


const start_end_Btn=document.querySelector('.start_end_Btn');
let stOrend='Start';

start_end_Btn.addEventListener('click',(event)=>
{
    if (stOrend=="Start"){
        start_end_Btn.innerText="Finish😅";
        stOrend='Finish';
        start();
    }
    else
    {
        start_end_Btn.innerText="Start🍒";
        stOrend='Start';
        ifLose();
    }
});


let timer=document.querySelector('.timer');

function countDown(timeLimit){
    let time=timeLimit;
    
    let interval= setInterval(()=>{
        if (time<0)
        {
            timer.innerHTML='Game Over';
            ifLose();
            clearInterval(interval);
        }
        else
        {
            timer.innerHTML=`${time}초`;
            time--;
        }

    },1000);    
}


function checkWin(correctNum,cnt){
    if (correctNum==cnt){
        ifWin();
    }
}


function ifWin(){
    alert("와우! 당신은 맞춤법 왕인가요?! 👑");
    finish();
}

function ifLose(){
    alert("아쉽게 실패했네요😢");
    finish();
}

function finish(){
    if (window.confirm("다시 도전하실래요?")) {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }
    else{
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

}

const game_zone=document.querySelector('.gameZone');



function start(){

    let music=document.querySelector('.backgroundMusic');
    music.play();

    let img=document.querySelectorAll('img');
    console.log(img);
    for (let i of img){
        console.log(i);
        randomPosition(i,200,200);
    }

    countDown(60);

    let cnt=0;

    game_zone.addEventListener('click',(event)=>{
        if (event.target.className=="False")
        {
            timer.innerHTML='Game Over';
            ifLose();
            
        }
        else if (event.target.className=="True")
        {
            cnt+=1;
            console.log(event);
            event.target.remove();
            checkWin(4,cnt); 
        }
    });
}
