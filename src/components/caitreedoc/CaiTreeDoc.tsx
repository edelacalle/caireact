import React from "react";
import { PrimeReactProvider } from 'primereact/api';

import "primereact/resources/themes/lara-light-cyan/theme.css";
//import "./lara-dark-cyan/theme.css";

import { Button } from 'primereact/button';  

//import React, { useState } from "react";
// import "./CaiTreeDoc.css";
import { CaiTreeDocProps } from "./CaiTreeDoc.types";
const CaiTreeDoc2: React.FC<CaiTreeDocProps> = (props) => {
    return (
        <>
        <p>CaiTreeDoc</p>
            
        </>
    )
}

const CaiTreeDoc = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

export default CaiTreeDoc;


function MyApp() {
    return (
        <PrimeReactProvider>
            <Button>hola</Button>
        </PrimeReactProvider>
    );
}

function Testeo(props:any){
    return(
        <>
        <Button>hola</Button>
        <p>pp{JSON.stringify(props)}</p>
        </>
    )
}