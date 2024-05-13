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

    const playDice = (valueDice)=>{
      const cargo = [...eggs, ...frogs, ...cookies];
      console.log(cargo.length);
      const goGrogu = grogu + 1;
      console.log('grogu', grogu);

      if(grogu >= 5){
        setGame('¡Has perdido!');
        
      } else {
        if (valueDice === 4){
          setGrogu(goGrogu);
          setGame("Grogu avanza una casilla");
      }
    }

      if(cargo.length > 1){
        console.log('juega');
        
        if (valueDice === 3){
          if (frogs.length > 0){
          setGame("Has ayuda a mando a recoger una rana")
          setFrogs(frogs.splice(1))
        } else{
          setGame("Grogu avanza una casilla");
          setGrogu(goGrogu);
        }
        } else if (valueDice === 2){
          if(eggs.length > 0){
            setGame("Has ayuda a mando a recoger un huevo") 
            setEggs(eggs.splice(1))
          }else{
            setGame("Grogu avanza una casilla");
            setGrogu(goGrogu);
          }
          
        } else if (valueDice === 1){
          if (cookies.length > 0){
          setGame("Has ayuda a mando a recoger una galleta")
          setCookies(cookies.splice(1))
          }else{
            setGame("Grogu avanza una casilla");
            setGrogu(goGrogu);
          }
        }
      } else{
        setGame('¡Has ganado!')
        setFrogs([]);
        setCookies([]);
        setEggs([]);
      }
    }

    const rollDice =()=>{
      let valueDice = Math.ceil(Math.random() * 4);
      setDice(valueDice);
      console.log(valueDice, dice);
      playDice(valueDice);
  
    }

  

  return (
    <main className="page">
      <Board groguData={grogu}/>
      <section className="section-dice">
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