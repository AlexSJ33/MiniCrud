import "./Tabela.css"



import { useFetchDocs } from "../../hooks/useFetchDocs";
import { useDeleteDoc } from "../../hooks/useDeleteDoc";
import { useUpdateDoc } from "../../hooks/useUpdateDoc";

function Tabela() {

  const { documents } = useFetchDocs("Funcionarios");
  const { deleteOrder } = useDeleteDoc("Funcionarios");
  const { updateOrder } = useUpdateDoc("Funcionarios");

  const handleDelete = (id) => {
    deleteOrder(id)
    
    console.log(id)
  };

  const handleEdit = (id) => {
    updateOrder(id)
    
    console.log("função editar",id)
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
              <button className="btnEdit"
              onClick={() => handleEdit([doc.count,doc.name, doc.email,doc.phone,doc.setor])}
              >Editar</button>
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