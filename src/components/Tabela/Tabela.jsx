import "./Tabela.css"

function Tabela() {
  return (
    <>
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Setor</th>
          <th>Ação</th>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>Zé da Manga</td>
          <td>ze@gmail.com</td>
          <td>99 33221195</td>
          <td>R.H</td>
          <td><button className="btnRemove">Remover</button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Joãozinho</td>
          <td>joao@gmail.com</td>
          <td>35 88225588</td>
          <td>Logistica</td>
          <td><button className="btnRemove">Remover</button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Francisco</td>
          <td>francisco@gmail.com</td>
          <td>11 99887755</td>
          <td>T.I</td>
          <td><button className="btnRemove">Remover</button></td>
        </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Tabela