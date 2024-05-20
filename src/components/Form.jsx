

function Form({changeName, name, game}) {
    const handleChangeInput=(ev)=>{
        const valueInput = ev.target.value
        changeName(valueInput);
    }
    const classForm = game !== "Cargamento listo para comenzar" ? 'hidden' : 'form';
  return (
    <form action="" className={classForm}>
        <label htmlFor="">Introduce tu nombre para jugar</label>
        <input type="text" name="name" id="name" placeholder="Escribe tu nombre para esta misión" onChange={handleChangeInput} value={name}/>
    </form>
  )
}

export default Form