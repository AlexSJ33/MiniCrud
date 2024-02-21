import "./Formulario.css"

import { useState, useEffect } from "react";
import { useInsertDoc } from "../../hooks/useInsertDoc";
import { useFetchDocs } from "../../hooks/useFetchDocs";


function Formulario() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [setor, setSetor] = useState("");

  const { insertDoc } = useInsertDoc("Funcionarios")
  const { documents } = useFetchDocs("Funcionarios");

  useEffect(() => {

    if(documents) {
           setCount(documents.length)
           console.log(documents.length)
           
           setCount((actualCount) => actualCount + 1);
           console.log(documents.length)
    }
}, [])
  
  
  const handleInsert = (e) => {
    
    e.preventDefault();
    
    const newFuncionario = {
      count,
      name,
      email,
      phone,
      setor,
    };
    
    insertDoc(newFuncionario);  
    
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