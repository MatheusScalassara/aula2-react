import "./BoasVindas.css"

const BoasVindas = ({ nome }) => {
  return (
    <div className="boas-vindas">
      <h1 className="titulo" >Bem-vindo ao React! {nome} </h1>
    </div>
  )
}

export default BoasVindas   