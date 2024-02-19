import "./Formulario.css"

import { useState } from "react";
import { useInsertDoc } from "../../hooks/useInsertDoc";

function Formulario() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [setor, setSetor] = useState("");

  const { insertDoc } = useInsertDoc("Funcionarios")

  const handleInsert = (e) => {
    e.preventDefault();
    const newFuncionario = {
      id,
      name,
      email,
      phone,
      setor,
    };

    insertDoc(newFuncionario);

    setId((actualId) => actualId + 1);
    
    
    setName("");
    setEmail("");
    setPhone("");
    setSetor("");
    
    console.log(newFuncionario)

  }

  return (
    <>
    <form onSubmit={handleInsert} className="form">
      <input type="text"
       id="name"
       placeholder="Nome"
       className="inputs"
       value = {name}
       required
       onChange={(e) => setName(e.target.value)}  />
      <input
       type="email"
       id="email"
       placeholder="Email"
       className="inputs"
       value={email}
       required
       onChange={(e) => setEmail(e.target.value)} />
      <input
       type="text"
       id="telefone"
       placeholder="Telefone"
       className="inputs"
       value={phone}
       required
       onChange={(e) => setPhone(e.target.value)} />
      <input
       type="text"
       id="setor"
       placeholder="Setor"
       className="inputs"
       value={setor}
       required
       onChange={(e) => setSetor(e.target.value)} />
      <input type="submit" value="Enviar" className="button"/>
    </form>
    </>
  
      
  )
}
export default Formulario