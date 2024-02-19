import "./Tabela.css"

function Tabela() {
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
          <tr>
            <td>1</td>
            <td>Zé da Manga</td>
            <td>ze@gmail.com</td>
            <td>99 33221195</td>
            <td>R.H</td>
            <td>
            <div className="btn">
              <button className="btnEdit">Editar</button>
              <button className="btnRemove">Remover</button>
            </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Joãozinho</td>
            <td>joao@gmail.com</td>
            <td>35 88225588</td>
            <td>Logistica</td>
            <td>
            <div className="btn">
              <button className="btnEdit">Editar</button>
              <button className="btnRemove">Remover</button>
            </div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Francisco</td>
            <td>francisco@gmail.com</td>
            <td>11 99887755</td>
            <td>T.I</td>
            <td>
              <div className="btn">
              <button className="btnEdit">Editar</button>
              <button className="btnRemove">Remover</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    
    </>
  )
}

export default Tabela