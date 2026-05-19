import "./MensagemSecreta.css"

//se a mensagem for true ela aparece, se for false ela desaparece

const MensagemSecreta = ({ mensagem }) => {
    return(

        <div className="mensagem-secreta">
            {mensagem ? <p>A mensagem secreta é: "React é vida!"</p> : ""}
        </div>
    )
}

export default MensagemSecreta