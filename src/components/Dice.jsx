
function Dice({rollDice, game}) {
    const handleClick = (event) => {
        event.preventDefault();
        rollDice();
    }

    const classDice = (game === "Grogu se ha comido todo, has perdido!" || game === "¡Has ganado!") ? 'hidden' : 'dice';

  return (
    <button className={classDice} onClick={handleClick}>Lanzar Dado</button>
  )
}

export default Dice