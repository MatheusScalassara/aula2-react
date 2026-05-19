import { useState } from "react";
import "./TituloUseState.css";

const TituloUseState = ({cor }) => {
    const [texto, setTexto] = useState("Título Inicial");
    const [inputTexto, setInputTexto] = useState("");
    const mudarTexto = () => {
        setTexto(inputTexto);
    }
    return(
        <div>
            <h2 style={{color: cor}}>
                {texto}
            </h2>

            <input type="text"
            className="inputTexto" 
            placeholder="Digite um texto"
            onChange={(e) => {setInputTexto(e.target.value)}}/>
            

            <button className="btnMudar"
            onClick={() => mudarTexto()}>
                Mudar
            </button>
        </div>
    )
}

export default TituloUseState