import "./Formulario.css"

function Formulario() {
  return (
    <>
    <form onSubmit="" class="form">
      <input type="text" id="nome" placeholder="Nome" class="inputs" />
      <input type="email" id="email" placeholder="Email" class="inputs" />
      <input type="text" id="telefone" placeholder="Telefone" class="inputs" />
      <input type="text" id="setor" placeholder="Setor" class="inputs" />
      <input type="submit" value="Enviar" class="button"/>
    </form>
    </>
  
      
  )
}
export default Formulario