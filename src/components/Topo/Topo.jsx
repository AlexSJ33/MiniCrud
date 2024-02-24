import "./Topo.css"
//------------- importação de coleções ---------------------
import { useState, useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";

import { useFetchDocs } from "../../hooks/useFetchDocs";
import { useDeleteDoc } from "../../hooks/useDeleteDoc";
import { useUpdateDoc } from "../../hooks/useUpdateDoc";
import { useInsertDoc } from "../../hooks/useInsertDoc";
//-----------------------//---------------------------------


//----------------- FUNÇÃO PRINCIPAL -----------------------
function Topo() {

  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [setor, setSetor] = useState("");

  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState("")
  const [funcionario, setFuncionario] = useState([])
  
  const { insertDoc } = useInsertDoc("Funcionarios")
  const { documents } = useFetchDocs("Funcionarios");

  const { deleteOrder } = useDeleteDoc("Funcionarios");
  const { updateOrder } = useUpdateDoc("Funcionarios");


  useEffect(() => {
    setCount(documents?.length > 0 ? documents?.length + 1 : 1);
    
    
  }, [documents])
  

  console.log(count)

//--------------Inserir novo cadastro-----------------------  
  const handleInsert = (e) => {
    
    e.preventDefault();
    
    if(!edit) {
      const newFuncionario = {
        count,
        name,
        email,
        phone,
        setor,
      };
      
      insertDoc(newFuncionario);  
    } else {
      // edit update
      const editFuncionar = {
        count: funcionario.count,
        createAt: funcionario.createAt,
        name,
        email,
        phone,
        setor
      }

      updateOrder(funcionario.id, editFuncionar)

      setEdit(false)
    }
    
    setName("");
    setEmail("");
    setPhone("");
    setSetor("");
    
  }
//--------------------Fim Inserir novo cadastro--------------

//--------------------Deletar cadastro-----------------------  
    const handleDelete = (id) => {
      deleteOrder(id)
      
      console.log(id)
    };
//---------------------Fim Deletar cadastro--------------------- 

//--------------------Mascara campo Telefone---------------------  
    const handlePhone = (event) => {
      let input = event.target
      input.value = phoneMask(input.value)
    }

    const phoneMask = (value) => {
      if (!value) return ""
      value = value.replace(/\D/g,""); //Remove tudo o que não é dígito
      value = value.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
      value = value.replace(/(\d)(\d{3})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
      return value
    }

//-------------------- Fim Mascara campo Telefone----------------  

//--------------------Editar cadastro-----------------------   
    const handleEdit = (doc) => {

      if(!edit || doc.id !== editId) {
        setEdit(true)
        setFuncionario(doc)

        setEditId(doc.id)
      } else {
        setEdit(false)
        setFuncionario([])
        setEditId("")
      }
      
  }

  useEffect(() => {
    setName(funcionario?.name || "")
    setEmail(funcionario?.email || "")
    setPhone(funcionario?.phone || "")
    setSetor(funcionario?.setor || "")
  }, [funcionario])

  console.log(funcionario)
//-------------------Fim Editar cadastro---------------------- 


  return (
    <>
    <div className="container">
      <div className="topo">
        <p className="title">Cadastro de Funcionários</p>
      </div>
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
        maxLength="15"
        id="telefone"
        placeholder="Telefone"
        className="inputs"
        value={phone}
        required
        onKeyUp={handlePhone}
        onChange={(e) => setPhone(e.target.value)} />
        <input
        type="text"
        id="setor"
        placeholder="Setor"
        className="inputs"
        value={setor}
        required
        onChange={(e) => setSetor(e.target.value)} />
        <input type="submit" value={edit ? 'Salvar' : 'Enviar'} className={edit ? 'btnSalvar' : 'btnEnviar'}/>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Setor</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          
          {documents?.map((doc, index) => (
            <tr key={index}>
            <td>{doc.count}</td>
            <td>{doc.name}</td>
            <td>{doc.email}</td>
            <td>{doc.phone}</td>
            <td>{doc.setor}</td>
            <td>
            <div className="btn">
              <button className={edit && editId === doc.id ? 'ImCancelCircle' : 'btnEdit'}
              onClick={() => handleEdit(doc)}
              
              >{edit && editId === doc.id ? <ImCancelCircle /> : 'Editar'}</button>
              <button className="btnRemove"
              onClick={() => handleDelete(doc.id)}
              >Remover</button>
            </div>
            </td>
          </tr>
          ))}

          
        </tbody>
      </table>
    </div>

    </>
    
  )
}

//----------------------FIM FUNÇÃO PRINCIPAL--------------------------
export default Topo