import "./App.css"
import Contador from "./components/Contador/Contador"
import Titulo from "./components/Titulo/Titulo"
import TituloProps from "./components/TituloProps/TituloProps"
import TituloUseState from "./components/TituloUseState/TituloUseState"

const App = () => {
  return (
  <div>
    <Titulo/>
    <hr />
    <TituloProps
      Descricao = "FrontEnd"
      cor = "blue"
      qtd = {20}
    />

    <hr />
    <TituloProps
      Descricao = "BackEnd"
      cor = "red"
      qtd = {15}
      paragrafo = {true}
    />

    <hr />
    <TituloUseState 
      cor = "orangered"
    />

    <hr />
    <Contador/>
  </div>
  )
}

export default App