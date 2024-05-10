import { useState } from "react";
import Grogu from "./Grogu";



function Board() {
    const [grogu, setGrogu] = useState(0);

  return (
    <section className="board">
        <div className="cell"><Grogu/></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </section>
  )
}

export default Board