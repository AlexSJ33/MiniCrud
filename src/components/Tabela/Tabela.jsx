import "./Tabela.css"


import { useFetchDocs } from "../../hooks/useFetchDocs";

function Tabela() {

  const { documents } = useFetchDocs("Funcionarios");

  console.log(documents)
  return (
    <>
 
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
            <td>{doc.id}</td>
            <td>{doc.name}</td>
            <td>{doc.email}</td>
            <td>{doc.phone}</td>
            <td>{doc.setor}</td>
            <td>
            <div className="btn">
              <button className="btnEdit">Editar</button>
              <button className="btnRemove">Remover</button>
            </div>
            </td>
          </tr>
          ))}

          
        </tbody>
      </table>
    
    </>
  )
}

export default Tabela