import { useState } from "react";
import Board from "./Board";
import Button from "./Button";
import Goods from "./Goods";

function Main() {
    const [grogu, setGrogu] = useState(0);
    const [cookies, setCookies] = useState(['🍪','🍪','🍪']);
    const [eggs, setEggs] = useState(['🥚','🥚','🥚']);
    const [frogs, setFrogs] = useState(['🐸','🐸','🐸']);
    const [dice, setDice] = useState(0);
    const [game, setGame] = useState("En curso");

    const handleDice = (event) => {
        console.log(grogu);
    }

  return (
    <main className="page">
      <Board groguData={grogu}/>
      <section>
      <button className="dice" onClick={handleDice}>Lanzar Dado</button>
        <div className="game-status">{game}</div>
      </section>
        <Goods goodsData={cookies}/>
        <Goods goodsData={eggs}/>
        <Goods goodsData={frogs}/>
      <section>
        <Button classScss="restart-button" text="Reiniciar Juego"/>
      </section>
    </main>
  )
}

export default Main