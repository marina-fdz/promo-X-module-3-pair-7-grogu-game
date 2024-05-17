

function Button({classScss, text, resetGame}) {
  const handleClickReset=(ev)=>{
    ev.preventDefault();
    resetGame();

  }
  return (
    <button className={classScss} onClick={handleClickReset}>{text}</button>
  )
}

export default Button