import '../styles/App.scss';
import adalabers from '../data/adalabers.json';
import { useState } from 'react';
import ls from '../services/localstorage';

function App() {
  {/*Creamos variable de estado(useState) para guardar los datos iniciales*/}
  const [data, setData] = useState(adalabers.results);
  {/*Para añadir más adalabers creo una nueva variable de estado que guarde la info de esa nueva adalaber.*/}
  const [newAdalaber, setNewAdalaber] = useState({
    id: "",
    name: "",
    counselor: "",
    speciality: "",
  });

  {/*Creamos una variable de estado para recuperar algo del Local Storage*/}
  const [search, setSearch] = useState(ls.get('search', ''));
  {/*Creamos una función manejadora que modifique la propiedad que corresponda*/}
  const handleNewAdalaber = (ev) => {
    {/*Copiamos lo que tenemos para que no lo machaque*/}
    setNewAdalaber({ ...newAdalaber, [ev.target.id]: ev.target.value });
  };

  {/*Creamos una función para guardar en el Local Storage*/}
  const handleSearch = (event) => {
    ls.set('search', '', event.target.value); 
    setSearch(event.target.value);
  }

  {/*Cremaos una función manejadora que modifique la propiedad que corresponda. Al hacer click en añadir, se añade lo que el usuario ponga.*/}
  const handleClick = (ev) => {
    {/*event.preventDefault(); --> para que se mantenga y no aparezca de forma instantánea*/}
    ev.preventDefault();
    {/*Copiamos lo que tenemos para que no lo machaque*/}
    data.push(newAdalaber);
    setData([...data]);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const renderAllAdalabers = data 
  .filter((adalaber) => 
      adalaber.name.toLowerCase().includes(search.toLowerCase()) ||
      adalaber.counselor.toLowerCase().includes(search.toLowerCase()) ||
      adalaber.speciality.toLowerCase().includes(search.toLowerCase())
  )
  .map((adalaber) => {
    return (
      <tr key={adalaber.id}>
        <td>{adalaber.name}</td>
        <td>{adalaber.counselor}</td>
        <td>{adalaber.speciality}</td>
      </tr>
    );
    });

  return (
    <div>
      <header className='header'>
        <h1 className='title'>Adalabers</h1>
        <form>
          <label className='label_name'>Nombre</label>
            <input className='input_search' type="text" name="name" placeholder="Ej: MariCarmen" onInput={handleSearch}/> 
            <select className='select' default="default" onInput={handleSearch}>
              <option value="default" disabled >¿Quién es tu tutor?</option>
              <option>Yanelis</option>
              <option>Dayana</option>
              <option>Iván</option>
            </select>
        </form>
      </header>
      <main>       
        <section className='section_table'>
        <table className='table'>
          <thead>
            <tr>
              <th className='title_info'>Nombre</th>
              <th className='title_info'>Tutora</th>
              <th className='title_info'>Especialidad</th>
            </tr>
          </thead>
          <tbody>{renderAllAdalabers}</tbody>
        </table>
        </section>
        <section className='add_adalaber' onSubmit={handleSubmit}>
          <h2 className='title_add_adalaber'>Añadir una Adalaber</h2>
          <form className='form_new_adalaber'>
            <label className='label_name'>Nombre</label>
            <input className='input_search' id="name" onInput={handleNewAdalaber}/>
            <label className='label_name'>Tutora</label>
            <input className='input_search' id="counselor" onInput={handleNewAdalaber}/>
            <label className='label_name'>Especialidad</label>
            <input className='input_search_speciality' id="speciality" onInput={handleNewAdalaber}/>
            <input className='add' type="submit" value="Añadir" placeholder='Añadir una nueva Adalaber' onClick={handleClick}/>
          </form>
        </section>
      </main>
    </div>
  );     
};

export default App;


  
       

