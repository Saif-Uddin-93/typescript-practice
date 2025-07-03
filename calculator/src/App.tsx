// import { useState } from 'react'
import './App.css'
// import { Header } from "./components/Header/index.tsx";
import { CalcBody } from "./components/CalcBody/index.tsx";
// import { CalculatorContextProvider } from "./components/context.tsx";

export function App (){
  return (<>
    {/* <CalculatorContextProvider> */}
    {/* <Header /> */}
      <main>
        <CalcBody />
      </main>
    {/* </CalculatorContextProvider> */}
  </>)
}

export default App
