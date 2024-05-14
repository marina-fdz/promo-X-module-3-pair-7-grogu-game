
import Grogu from "./Grogu";



function Board(props) {

  const cells = ['','','','','','',''];
  const cellsHtml = cells.map((cell)=>{
    const index = cells.indexOf(cell);
  return <div className="cell" key={index}></div>})
  

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