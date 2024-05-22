import { useState } from "react";
import "../styles/App.scss"
import Main from "./Main";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Instructions from "./Instructions";
import Options from "./Options";
import Header from "./Header";

function App() {
  const [name, setName] = useState("");

  const changeName=(valueInput)=>{
    setName(valueInput)
  }
  
  return (
    <div className="page">
      <Header name={name}/>

      <Routes>
        <Route path="/" element={<Main name={name} changeName={changeName}/>}/>
        <Route path="/instructions" element={<Instructions/>}/>
        <Route path="/options" element={<Options/>}/>

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;