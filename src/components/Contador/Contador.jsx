import "./Contador.css";
import { useState } from "react";


const Contador = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    return(
        <div>
            <h2 className="titulo-menor">Contador: {contador}</h2>
            <button
                className="btn-contador"
                onClick={incrementar}>
                Incrementar
            </button>
        </div>
    )
}

export default Contador
