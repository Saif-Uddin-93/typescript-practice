import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { CalculatorContextProvider } from "./components/context.tsx";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CalculatorContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CalculatorContextProvider>
  </StrictMode>,
)