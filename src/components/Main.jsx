import { useState } from "react";
import Board from "./Board";
import Button from "./Button";
import Goods from "./Goods";
import Dice from "./Dice";

function Main() {
    const [grogu, setGrogu] = useState(0);
    const [cookies, setCookies] = useState(['🍪','🍪','🍪']);
    const [eggs, setEggs] = useState(['🥚','🥚','🥚']);
    const [frogs, setFrogs] = useState(['🐸','🐸','🐸']);
    const [dice, setDice] = useState(0);
    const [game, setGame] = useState("En curso");

    const rollDice =(valueDice)=>{
    
      setDice(valueDice)

      if (dice === 4){
        setGame("Grogu avanza una casilla")
      } else if (dice === 3){
        if (frogs.length !== 0){
        setGame("Has ayuda a mando a recoger una rana")
        setFrogs(frogs.splice(1))
      } 
      } else if (dice === 2 && eggs.lenth !== 0){
        setGame("Has ayuda a mando a recoger un huevo") 
        setEggs(eggs.splice(1))
      } else if (dice === 1){
        if (cookies.length !== 0){
        setGame("Has ayuda a mando a recoger una galleta")
        setCookies(cookies.splice(1))
        }
      } else {
        setGame("En curso")
      }
    }

  

  return (
    <main className="page">
      <Board groguData={grogu}/>
      <section>
      <Dice rollDice={rollDice}/>
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