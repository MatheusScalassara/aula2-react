import "./TituloProps.css"

const TituloProps = ({Descricao, cor, qtd, paragrafo}) => {
    return(
        <div>
            <h2 style={{color: cor}}>A disciplina de {Descricao ? Descricao : "DEV"} você vai aprender o Framework de react</h2>
            {paragrafo ?
            <p className="paragrafo-props">
                Hoje a aula de {Descricao ? Descricao : "DEV"} tem {qtd} alunos
            </p>
            : ""}
        </div>
    )
}

export default TituloProps