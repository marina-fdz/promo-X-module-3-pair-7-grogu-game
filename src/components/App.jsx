import { useState } from "react";
import "../styles/App.scss"

function App() {

  const [grogu, setGrogu] = useState([0]);
  const [cookies, setCookies] = useState(['🍪','🍪','🍪']);
  const [eggs, setEggs] = useState([]);
  const [frogs, setFrogs] = useState([]);
  const [dice, setDice] = useState(0);
  const [game, setGame] = useState("En curso");


  return (
    <div className="page">
      <header>
      <h1>¡Cuidado con Grogu!</h1>
    </header>
    <main className="page">
      <section className="board">
        <div className="cell"><div className="grogu">👣</div></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </section>

      <section>
        <button className="dice">Lanzar Dado</button>
        <div className="game-status">{game}</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">{cookies[0]}</div>
        <div className="goods-item">{cookies[1]}</div>
        <div className="goods-item">{cookies[2]}</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
    </div>
  );
}

export default App;