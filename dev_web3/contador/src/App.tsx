import React, { useState } from 'react';
import styled from "styled-components";

function App() {
  let[contador, setContador] = useState<number>(0);

  const incrementa = ()=>{
    setContador(prevContador => prevContador + 1);
  };

  const decrementa = ()=>{
    setContador(prevContador => prevContador - 1);
  }
  
  return (
    <Style>
        <p>{contador}</p>
        <div className='container-buttons'>
          <button onClick={incrementa}>incrementar</button>
          <button onClick={decrementa}>decrementa</button>
        </div>
    </Style>
  );
}

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* background-color: grey; */

  margin: 0;
  width: 100%;
  height: 300px;

  button{
    width: 10%;
    margin: 20px;
  }

  .container-buttons{
    display: flex;
    flex-direction: row;
    width: 100%;

    align-items: center;
    justify-content: center;
  }
`;

export default App;
