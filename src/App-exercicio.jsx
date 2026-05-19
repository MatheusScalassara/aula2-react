import "./App.css"
import BoasVindas from "./components/BoasVindas/BoasVindas"
import MensagemSecreta from "./components/MensagemSecreta/MensagemSecreta"
import CartaoProduto from "./components/CartaoProduto/CartaoProduto"

const App = () => {
  return (
    <div>
      <BoasVindas nome="Matheus" />
      <hr />
      <MensagemSecreta mensagem={true} />
      <hr />
      <MensagemSecreta mensagem={false} />
      <hr />
      <div className="cartao-pai">
        <CartaoProduto
          nome="Celular"
          preco={2000}
          imagem="../public/celular.jpg"
        />
        <CartaoProduto
          nome="Notebook"
          preco={4000}
          imagem="../public/notebook.jpg"
        />
        <CartaoProduto
          nome="Fone de Ouvido"
          preco={500}
          imagem="../public/fone-de-ouvido.jpg"
        />
      </div>
    </div>
    
  )
}

export default App