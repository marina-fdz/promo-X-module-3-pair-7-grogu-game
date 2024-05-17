
import Grogu from "./Grogu";



function Board({groguData}) {

  const cells = ['','','','','','',''];
  const cellsHtml = cells.map((cell, index)=>{
   
    const contentCell = index === groguData ? <Grogu/>: "";

  return <div className="cell" key={index}>{contentCell}</div>})
  

  return (
    <section className="board">
      {cellsHtml}
        {/* <div className="cell"><Grogu/></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div> */}
      </section>
  )
}

export default Board