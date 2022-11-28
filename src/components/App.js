import '../styles/App.scss';
import adalabers from '../data/adalabers.json'


function App() {
  return ( 
    <div>
      {/*HEADER*/}
      <header>
        <h1>Adalabers</h1>
        <form>
          <label>Nombre</label>
          <input type="text" name="name" placeholder="Ej:MariCarmen"/> 
          <select>Elige una opción
            <option>Yanelis</option>
            <option>Dayana</option>
            <option>Iván</option>
          </select>
        </form>
      </header>
      {/*MAIN*/}
      <main>
        <section>
        <table className="table">
          <thead><tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr></thead>
          <tbody>
            <tr>
              <td>MariCarmen</td>
              <td>Yanelis</td>
              <td>Python</td>
            </tr>
            <tr>
              <td>Amparo</td>
              <td>Dayana</td>
              <td>IA</td>
            </tr>
            <tr>
              <td>Escandia</td>
              <td>Iván</td>
              <td>3D graphics</td>
            </tr>
          </tbody>
        </table>
        </section>
        <section>
          <h2>Añadir una Adalaber</h2>
          <form>
            <label>Nombre</label>
            <input id="name"/>
            <label>Tutora</label>
            <input id="counselor"/>
            <label>Especialidad</label>
            <input id="specialty"/>
            <input type="submit" value="Añadir" placeholder='Añadir una nueva Adalaber'/>
          </form>
        </section>
      </main>
    </div>
  )
}

export default App; 