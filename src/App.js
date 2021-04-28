import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
display: flex;
align-items: center;
padding-top: 5rem;
flex-direction: column;
`;


const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }

`;

  


// async y await se utlizan para  detener la ejecucion del codigo hasta que finalice la funcion que esta como await y se pueden omitir las promesas
function App() {

  //State de frases
  const [frase, guardarFrase] = useState({});

  const consultarApi = async () => {
    const api = await fetch('https://breakingbadapi.com/api/quotes');
    const frase = await api.json();
    let number = Math.floor(Math.random() * 70); 
    guardarFrase(frase[number]);

  }

  //cargar una frase
  useEffect( () => {
    consultarApi()
  }, []);

  return (
    <Contenedor>
      <Frase
        frase={frase} 
      />
      <Boton
        onClick={consultarApi}  
      >Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;

//npm i @emotion/core @emotion/styled
