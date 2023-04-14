import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Detail from './components/detail/Detail';
import About from './components/abaut/About';
import Favoritos from './components/Favoritos/Favoritos';
import Form from './components/Form/Form';


function App() {
   
   const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
   const API_KEY = '2e22add2f3be.f3fd6560badc1d2bef10 '
   

   const [characters, setCharacters] = useState([])

   function onSearch(id) {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
         if (characters.find((value) => value.id === data.id)) {
            alert('El personaje con ese id ya fue agregado');
          } else if (id === '' || id > 826 || id < 1)  {
            alert('El personaje con ese id no existe');
          } else {
            setCharacters([...characters, data]);
          }
      });
   }
   const onClose = (id) => {
   setCharacters(characters.filter((char) => char.id !== id));
   };

   const navigate = useNavigate();
    const [access, setAccess] = useState(false);
    const EMAIL = 'franpuy6@gmail.com';
    const PASSWORD = 'franpuy123';

    const login = (form) => {
        if (form.email === EMAIL && form.password === PASSWORD) {
            setAccess(true);
            navigate('/home');
        } else {
            setAccess(false);
        }
    }

    const logout = () => {
        setAccess(false);
        navigate('/');
    }

    useEffect(() => {
        !access && navigate('/');
     }, [access, navigate]);

     const location = useLocation();

   return (
      <div className='App' style={{padding: "25px"}}>
         
         {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/" element={<Form login={login}/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/Favoritos' element={<Favoritos/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
         
      </div>
   ); 
};


 
export default App;



