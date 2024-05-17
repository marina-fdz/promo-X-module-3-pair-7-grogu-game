import { useState } from "react";
import Board from "./Board";
import Button from "./Button";
import Goods from "./Goods";
import Dice from "./Dice";
import Form from "./Form";
import WelcomeText from "./WelcomeText";

function Main() {
    const [grogu, setGrogu] = useState(0);
    const [cookies, setCookies] = useState(['🍪','🍪','🍪']);
    const [eggs, setEggs] = useState(['🥚','🥚','🥚']);
    const [frogs, setFrogs] = useState(['🐸','🐸','🐸']);
    const [dice, setDice] = useState(0);
    const [game, setGame] = useState("En curso");
    const [name, setName] = useState("");

    const playDice = (valueDice)=>{
      const cargo = [...eggs, ...frogs, ...cookies];
      const eggsUpdate = [...eggs];
      const frogsUpdate = [...frogs];
      const cookiesUpdate = [...cookies];
      const goGrogu = grogu + 1;
      console.log(goGrogu);
      
        
        if(valueDice === 4){
          setGrogu(goGrogu);
          setGame("Grogu avanza una casilla");
          
        } else if (valueDice === 3){
          if (frogsUpdate.length > 0){
          setGame("Has ayuda a mando a recoger una rana")
          setFrogs(frogsUpdate.splice(1))
        } else{
          setGame("Prueba otra vez");
        
        }
        } else if (valueDice === 2){
          if(eggsUpdate.length > 0){
            setGame("Has ayuda a mando a recoger un huevo") 
            setEggs(eggsUpdate.splice(1))
          }else{
            setGame("Prueba otra vez");
         
          }
          
        } else if (valueDice === 1){
          if (cookiesUpdate.length > 0){
          setGame("Has ayuda a mando a recoger una galleta")
          setCookies(cookiesUpdate.splice(1))
          }else{
            setGame("Prueba otra vez");
            
          }
        }
      

        if(grogu === 6){
          setGame("Grogu se ha comido todo, has perdido!")
          //Ocultar dado
        }

        if(cargo.length < 1){
          
          setEggs([]);
          setFrogs([]);
          setCookies([]);
          setGame("¡Has ganado!");
        }
    }

    const rollDice =()=>{
      let valueDice = Math.ceil(Math.random() * 4);
      setDice(valueDice);
      console.log(valueDice, dice);
      playDice(valueDice);
    }

    const changeName=(valueInput)=>{
      setName(valueInput)
    }

    const resetGame=()=>{
      setGame("En curso");
      setGrogu(0);
      setCookies(['🍪','🍪','🍪']);
      setEggs(['🥚','🥚','🥚']);
      setFrogs(['🐸','🐸','🐸'])
      setName("")
    }
  

  return (
    <main className="page">
      <WelcomeText name={name}/>
      <Form changeName={changeName} name={name}/>
      <Board groguData={grogu}/>
      <section className="section-dice">
      <Dice rollDice={rollDice}/>
        <div className="game-status">{game}</div>
      </section>
        <Goods goodsData={cookies}/>
        <Goods goodsData={eggs}/>
        <Goods goodsData={frogs}/>
      <section>
        <Button classScss="restart-button" text="Reiniciar Juego" resetGame={resetGame}/>
      </section>
    </main>
  )
}

export default Main