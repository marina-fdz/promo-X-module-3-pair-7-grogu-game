
function Dice({rollDice}) {
    const handleClick = (event) => {
    
        event.preventDefault()
        
        rollDice()
        
    }
  return (
    <button className="dice" onClick={handleClick}>Lanzar Dado</button>
  )
}

export default Dice