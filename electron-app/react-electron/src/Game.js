import React, { useState } from "react";

function Game() {
  const [now, setNow] = useState("Start🍒");
  function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomPosition(img, imgWidth, imgHeight) {
    const xPos = getRandomNum(0, window.innerWidth - imgWidth);
    const yPos = getRandomNum(150, window.innerHeight - imgHeight);
    img.style.transform = `translate(${xPos}px, ${yPos}px)`;
    img.style.display = "inline";
    // console.log(`${xPos}, ${yPos}`);
  }

  const onStart = (event) => {
    if (now === "Start🍒") {
      setNow("Finish😅");
      start();
    } else {
      setNow("Start🍒");
      ifLose();
    }
  };

  let timer = document.querySelector(".timer");

  function countDown(timeLimit) {
    let time = timeLimit;

    let interval = setInterval(() => {
      if (time < 0) {
        timer.innerHTML = "Game Over";
        ifLose();
        clearInterval(interval);
      } else {
        timer.innerHTML = `${time}초`;
        time--;
      }
    }, 1000);
  }

  function checkWin(correctNum, cnt) {
    if (correctNum == cnt) {
      ifWin();
    }
  }

  function ifWin() {
    alert("와우! 당신은 맞춤법 왕인가요?! 👑");
    finish();
  }

  function ifLose() {
    alert("아쉽게 실패했네요😢");
    finish();
  }

  function finish() {
    if (window.confirm("다시 도전하실래요?")) {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    } else {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  }

  const game_zone = document.querySelector(".gameZone");

  function start() {
    let music = document.querySelector(".backgroundMusic");
    music.play();

    let img = document.querySelectorAll("img");
    // console.log(img);
    for (let i of img) {
      //   console.log(i);
      randomPosition(i, 200, 200);
    }

    countDown(60);

    let cnt = 0;

    game_zone.addEventListener("click", (event) => {
      if (event.target.className == "False") {
        timer.innerHTML = "Game Over";
        ifLose();
      } else if (event.target.className == "True") {
        cnt += 1;
        // console.log(event);
        event.target.remove();
        checkWin(4, cnt);
      }
    });
  }

  return (
    <>
      <header>
        <button className="start_end_Btn" onClick={onStart}>
          {now}
        </button>
        <div className="timer">60초</div>
      </header>

      <div className="gameZone">
        <img className="False" defer src="/image/1F.png" alt="" />
        <img src="/image/2F.png" alt="" className="False" defer />
        <img src="/image/3F.png" alt="" className="False" defer />
        <img src="/image/4F.png" alt="" className="False" defer />

        <img className="True" defer src="/image/1T.png" alt="" />
        <img className="True" src="/image/2T.png" alt="" />
        <img src="/image/3T.png" alt="" className="True" defer />
        <img src="/image/4T.png" alt="" className="True" defer />
      </div>
    </>
  );
}

export default Game;
