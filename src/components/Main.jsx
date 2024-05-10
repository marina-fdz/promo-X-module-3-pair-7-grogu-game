import { useState } from "react";
import Board from "./Board";
import Button from "./Button";
import Goods from "./Goods";

function Main() {
    
    const [cookies, setCookies] = useState(['🍪','🍪','🍪']);
    const [eggs, setEggs] = useState(['🥚','🥚','🥚']);
    const [frogs, setFrogs] = useState(['🐸','🐸','🐸']);
    const [dice, setDice] = useState(0);
    const [game, setGame] = useState("En curso");

  return (
    <main className="page">
      <Board/>
      <section>
        <Button classScss="dice" text="Lanzar Dado"/>
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