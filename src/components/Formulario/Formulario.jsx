import "./Formulario.css"

function Formulario() {
  return (
    <>
    <form onSubmit="" className="form">
      <input type="text" id="nome" placeholder="Nome" className="inputs" />
      <input type="email" id="email" placeholder="Email" className="inputs" />
      <input type="text" id="telefone" placeholder="Telefone" className="inputs" />
      <input type="text" id="setor" placeholder="Setor" className="inputs" />
      <input type="submit" value="Enviar" className="button"/>
    </form>
    </>
  
      
  )
}
export default Formulario