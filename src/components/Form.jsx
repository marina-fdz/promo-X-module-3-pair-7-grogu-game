

function Form({changeName, name}) {
    const handleChangeInput=(ev)=>{
        const valueInput = ev.target.value
        changeName(valueInput);
    }
  return (
    <form action="" className="form">
        <label htmlFor="">Introduce tu nombre para jugar</label>
        <input type="text" name="name" id="name" placeholder="Escribe tu nombre para esta misión" onChange={handleChangeInput} value={name}/>
    </form>
  )
}

export default Form