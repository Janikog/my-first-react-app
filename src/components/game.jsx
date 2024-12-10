import { useState } from "react";

const rock = "https://cdn-icons-png.flaticon.com/512/3562/3562093.png";
const paper = "https://cdn-icons-png.flaticon.com/512/12355/12355903.png";
const scissor = "https://cdn-icons-png.flaticon.com/512/9534/9534501.png";

const Game = () => {
  const [compCard, setCompCard] = useState(null);
  const [userCard, setUserCard] = useState(null);
  const [score, setScore] = useState({ user: 0, comp: 0 });
  const [result, setResult] = useState("");
  const [clicked, setClicked] = useState(false);

  const compCardGenerate = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return rock;
    else if (randomNumber === 1) return paper;
    else return scissor;
  };

  const handleCardChoice = () => {
    if (clicked) {
      const computerChoice = compCardGenerate();
      setCompCard(computerChoice);
      calculateWinner(userCard, computerChoice);
    } else alert("Choose one");
    setClicked(false);
  };

  const calculateWinner = (userCard, compCard) => {
    if (userCard === compCard) {
      setResult("Draw");
    } else if (
      (userCard === rock && compCard === scissor) ||
      (userCard === paper && compCard === rock) ||
      (userCard === scissor && compCard === paper)
    ) {
      setScore((prevScore) => ({ ...prevScore, user: prevScore.user + 1 }));
      setResult("User Wins");
    } else {
      setScore((prevScore) => ({ ...prevScore, comp: prevScore.comp + 1 }));
      setResult("Computer Wins");
    }
  };
  const resetFunciton = () => {
    setScore({ user: 0, comp: 0 });
    setCompCard(false);
    setResult("");
  };
  return (
    <>
      <div className="usercards">
        <div>
          <img
            onClick={() => {
              setUserCard(rock);
              setClicked(true);
            }}
            src={rock}
            alt="rock"
            style={{ cursor: "pointer", width: "100px", height: "100px" }}
          />
        </div>
        <div>
          <img
            onClick={() => {
              setUserCard(paper);
              setClicked(true);
            }}
            src={paper}
            alt="paper"
            style={{ cursor: "pointer", width: "100px", height: "100px" }}
          />
        </div>
        <div>
          <img
            onClick={() => {
              setUserCard(scissor);
              setClicked(true);
            }}
            src={scissor}
            alt="scissors"
            style={{ cursor: "pointer", width: "100px", height: "100px" }}
          />
        </div>
      </div>
      <h3>User Score : {score.user}</h3>
      <h3>{result}</h3>
      <h3>Computer Score : {score.comp}</h3>
      <div onClick={() => handleCardChoice()} className="button">
        <button>Start</button>
      </div>
      <div onClick={() => resetFunciton()} className="button2">
        <button>Reset</button>
      </div>

      <div>
        {compCard && (
          <div>
            <img src={compCard} alt="computer choice" />
          </div>
        )}
      </div>
    </>
  );
};

export default Game;
