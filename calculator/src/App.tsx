// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Header } from "./components/Header/index.tsx";
import { CalcBody } from "./components/CalcBody/index.tsx";

export function App (){
  return (<>
    <Header />
    <body>
      <CalcBody />
    </body>
  </>)
}

export default App
