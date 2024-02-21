import "./Tabela.css"



import { useFetchDocs } from "../../hooks/useFetchDocs";
import { useDeleteDoc } from "../../hooks/useDeleteDoc";

function Tabela() {

  const { documents } = useFetchDocs("Funcionarios");
  const { deleteOrder } = useDeleteDoc("Funcionarios");

  
  console.log(documents)

  const handleDelete = (id) => {
    deleteOrder(id)
    
    console.log(id)
  };

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
            <td>{doc.count}</td>
            <td>{doc.name}</td>
            <td>{doc.email}</td>
            <td>{doc.phone}</td>
            <td>{doc.setor}</td>
            <td>
            <div className="btn">
              <button className="btnEdit">Editar</button>
              <button className="btnRemove"
              onClick={() => handleDelete(doc.id)}
              >Remover</button>
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