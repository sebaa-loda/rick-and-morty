import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Error from "./components/Error";
import Form from "./components/Form";
import Favorites from "./components/Favorites";

const URL = "http://localhost:3001/rickandmorty/login/";

function App() {
  const [characters, setCharacters] = useState([]);
  const lugar = useLocation();
  const mostrarNav = lugar.pathname !== "/";
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  };
  function onClose(id) {
    setCharacters(
      characters.filter((character) => character.id !== parseInt(id))
    );
  }
  function generarRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function random() {
    const randomId = generarRandom(1, 826);
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].id === randomId) {
        return alert("ya esta incluido");
      }
    }
    axios(`https://rickandmortyapi.com/api/character/${randomId}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }
  const login = async (userData) => {
    try {
      const { email, password } = userData;

      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;

      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="container">
      {mostrarNav && (
        <Nav onSearch={onSearch} random={random} setAccess={setAccess} />
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
