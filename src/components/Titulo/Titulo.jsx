import "./Titulo.css";

const Titulo = () => {
    let nome =  "Matheus"
    return(
        <div className="container">
            <h1 className="titulo-principal">
                Aula 2 - Trabalhando com UseState
            </h1>
            <h2 className="subtitulo">
                Olá, eu sou {nome}, e hoje vamos aprender a usar o Hook UseState
            </h2>
            <p className="paragrafo">
                O useState é um Hook do React que permite adicionar estado a componentes funcionais.
            </p>
            <p className="paragrafo">
                Ele retorna um array com dois elementos: o valor atual do estado e uma função para atualizá-lo. Para usar o useState, basta importá-lo do React e chamá-lo dentro do seu componente funcional, passando o valor inicial do estado como argumento. Por exemplo:
            </p>

            <img src="./hook.png" alt="Exemplo de uso do useState" className="image-title" />
        </div>
    ) 
}

export default Titulo