
function Dice({rollDice}) {
    const handleClick = (event) => {
    
        event.preventDefault()
        let valueDice = Math.ceil(Math.random() * 4)
        rollDice(valueDice)
        
    }
  return (
    <button className="dice" onClick={handleClick}>Lanzar Dado</button>
  )
}

export default Dice