import React, { useState, useEffect } from "react";

function Game() {
  const [now, setNow] = useState("Start🍒");
  const [cnt, setCnt] = useState(0);
  const [timer, setTimer] = useState(60);
  function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomPosition(img, imgWidth, imgHeight) {
    const xPos = getRandomNum(0, window.innerWidth - imgWidth);
    const yPos = getRandomNum(150, window.innerHeight - imgHeight);
    img.style.transform = `translate(${xPos}px, ${yPos}px)`;
    img.style.display = "inline";
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

  function countDown() {
    let interval = setInterval(() => {
      if (timer < 0) {
        timer.innerHTML = "Game Over";
        ifLose();
        clearInterval(interval);
      } else {
        let tmp_timer = timer - 1;
        setTimer(tmp_timer);
      }
    }, 1000);
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

  function start() {
    let music = document.querySelector(".backgroundMusic");
    music.play();

    let img = document.querySelectorAll("img");
    // console.log(img);
    for (let i of img) {
      //   console.log(i);
      randomPosition(i, 200, 200);
    }

    countDown();
  }
  const onClickGameZone = (event) => {
    if (event.target.className == "False") {
      setTimer("Game Over");
      ifLose();
    } else if (event.target.className == "True") {
      if (3 === cnt) {
        ifWin();
      }
      let tmp_cnt = cnt + 1;
      setCnt(tmp_cnt);
      event.target.remove();
    }
  };

  return (
    <>
      <header>
        <button className="start_end_Btn" onClick={onStart}>
          {now}
        </button>
        <div className="timer">{timer}</div>
      </header>

      <div className="gameZone" onClick={onClickGameZone}>
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
