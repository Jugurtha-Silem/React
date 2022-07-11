import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import Menu from './Coponents/Menu'
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList.js';
import './css/app.css';


function App() {
  const [technos, setTechnos] = useState([]);
  //technos
  //[{name :'react', category : 'learn react' },{name : 'Node', category : 'learn node'},]
  function handleAddTechno(techno){
    console.log('handleAddTecho', techno);

  };
  return (
    <>
      <Menu/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/add" element = {<TechnoAdd handleAddTechno={handleAddTechno} />} />
        <Route path="/list" element = {<TechnoList/>} />
      </Routes>
      
    </>
  );
};

export default App;
