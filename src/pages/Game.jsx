import "./pages.scss";
import rockPNG from "../images/rock.png";
import scissorsPNG from "../images/scissors.png";
import paperPNG from "../images/paper.png";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Game() {
  const [isSelected, setIsSelected] = useState(false);

  let yourChoiceInner = ""; //for html inner
  let yourChoice = ""; //for query
  let computerChoice = ""; //for query
  let choice = ""; //for user choice check

  const selectOption = (e) => {
    if (!isSelected) {
      yourChoice = document.querySelector("#user-choice");
      let choice = e.target.name || e.target.id;

      if (choice === "rock" || choice === "li-rock") {
        choice = "rock";
        document.getElementById("li-rock").setAttribute("class", "selected");
        document.getElementById("li-paper").setAttribute("class", "unselected");
        document
          .getElementById("li-scissor")
          .setAttribute("class", "unselected");
        yourChoiceInner = `<img
        src="/static/media/rock.021fb1f6ec46c4fdacf8.png"
        name="rock"
        alt="rock"

      />`;
      } else if (choice === "paper" || choice === "li-paper") {
        choice = "paper";
        document.getElementById("li-paper").setAttribute("class", "selected");
        document
          .getElementById("li-scissor")
          .setAttribute("class", "unselected");
        document.getElementById("li-rock").setAttribute("class", "unselected");
        yourChoiceInner = ` <img
        src="/static/media/paper.b1bec12eb373e62811ba.png"
        name="paper"
        alt="paper"

      />`;
      } else if (choice === "scissor" || choice === "li-scissor") {
        choice = "scissor";
        document.getElementById("li-scissor").setAttribute("class", "selected");
        document.getElementById("li-paper").setAttribute("class", "unselected");
        document.getElementById("li-rock").setAttribute("class", "unselected");
        yourChoiceInner = `<img
        src="/static/media/scissors.55a2f9a1a13600ee8302.png"
        name="scissor"
        alt="scissors"


      />`;
      } else {
        yourChoiceInner = "Siu";
      }
      yourChoice.innerHTML = yourChoiceInner;
      setIsSelected(true);
      const counter = document.querySelector("#vs-tag");
      handleCounter(counter, choice);
    }
  };

  const handleCounter = (counter, userChoice) => {
    var i = 3;
    let countInterval = setInterval(() => {
      counter.innerHTML = i;
      i--;
      if (i < 0) {
        clearInterval(countInterval);
        computerSelect(counter, userChoice);
      }
    }, 1000);
  };

  const computerSelect = (counter, userChoice) => {
    computerChoice = document.querySelector("#computer-choice");
    let computerChoiceInner = "";
    var compSelectNum = Math.random();
    let compSelect = "";
    if (compSelectNum < 0.33) {
      compSelect = "rock";
      computerChoiceInner = `<img
      src="/static/media/rock.021fb1f6ec46c4fdacf8.png"
      name="rock"
      alt="rock"

    />`;
      computerChoice.innerHTML = computerChoiceInner;
    } else if (compSelectNum >= 0.33 && compSelectNum < 0.66) {
      compSelect = "paper";
      computerChoiceInner = ` <img
      src="/static/media/paper.b1bec12eb373e62811ba.png"
      name="paper"
      alt="paper"

    />`;
      computerChoice.innerHTML = computerChoiceInner;
    } else {
      compSelect = "scissor";
      computerChoiceInner = `<img
      src="/static/media/scissors.55a2f9a1a13600ee8302.png"
      name="scissor"
      alt="scissors"


    />`;
      computerChoice.innerHTML = computerChoiceInner;
    }
    console.log(compSelect);
    counter.innerHTML = "VS";
    whoWin(userChoice, compSelect);
  };

  const restart = () => {
    document.getElementById("li-scissor").setAttribute("class", "isSelect");
    document.getElementById("li-paper").setAttribute("class", "isSelect");
    document.getElementById("li-rock").setAttribute("class", "isSelect");
    document.getElementById("user-choice").innerHTML = "";
    document.getElementById("computer-choice").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    setIsSelected(false);
  };

  const whoWin = (user, computer) => {
    const result = document.querySelector("#result");
    if (user === computer) {
      result.innerHTML = "Tie";
    } else if (user === "rock" && computer === "paper") {
      result.innerHTML = "You lose :(";
    } else if (user === "rock" && computer === "scissor") {
      result.innerHTML = "You win ez GG";
    } else if (user === "scissor" && computer === "paper") {
      result.innerHTML = "You win ez GG";
    } else if (user === "scissor" && computer === "rock") {
      result.innerHTML = "You lose :(";
    } else if (user === "paper" && computer === "scissor") {
      result.innerHTML = "You lose :(";
    } else if (user === "paper" && computer === "rock") {
      result.innerHTML = "You win ez GG";
    } else {
      console.log({ user, computer });
    }
  };

  return (
    <div className="game">
      <div className="game-left"></div>
      <div className="game-right"></div>
      <div className="game-main">
        <div className="options">
          <div>
            <h1>ROCK PAPER SCISSOR</h1>
          </div>
          <ul>
            <li id="li-rock" className="isSelect" onClick={selectOption}>
              <img src={rockPNG} name="rock" alt="rock" />
            </li>
            <li id="li-paper" className="isSelect" onClick={selectOption}>
              <img src={paperPNG} name="paper" alt="paper" />
            </li>
            <li id="li-scissor" className="isSelect" onClick={selectOption}>
              <img src={scissorsPNG} name="scissor" alt="scissors" />
            </li>
          </ul>
        </div>
        <div className="versus">
          <h2>Select your weapon</h2>
          <div className="fight">
            <div>
              <span>Your Choice</span>
              <span id="user-choice" className="choices"></span>
            </div>
            <div>
              <span id="vs-tag">VS</span>
            </div>

            <div>
              <span>Comp. Choice</span>
              <span id="computer-choice" className="choices"></span>
            </div>
          </div>
        </div>
        <div className="game-menu">
          <span id="result"></span>
          <button onClick={restart}>Restart</button>
        </div>
      </div>
    </div>
  );
}

export default Game;
