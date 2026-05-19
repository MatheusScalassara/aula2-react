import "./CartaoProduto.css"

const CartaoProduto = ({ nome, preco, imagem }) => {
    return(
        <div className="cartao-produto">
            <img src={imagem} alt={nome} />
            <h3>{nome}</h3>
            <p>R$ {preco}</p>
        </div>
    )
}

export default CartaoProduto