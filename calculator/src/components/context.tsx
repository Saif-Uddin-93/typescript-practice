import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type CalcConextProviderProps = {
    children: React.ReactNode;
}

type CalculatorContextType = {
    displayedDigits: React.ReactElement[];
    setDisplayedDigits: React.Dispatch<React.SetStateAction<React.ReactElement[]>>;
};

export const CalculatorContext = createContext<CalculatorContextType | null>(null);

function CalculatorContextProvider ({children}: CalcConextProviderProps) {
    const [displayedDigits, setDisplayedDigits] = useState<React.ReactElement[]>([]);
    const numberBtn = document.getElementsByClassName("number");

    const addDigit = (item: React.ReactElement) => {
        setDisplayedDigits([...displayedDigits, item]);
    }

    return(
        <CalculatorContext.Provider 
            value={{
                displayedDigits,
                setDisplayedDigits
            }}>
            {children}
        </CalculatorContext.Provider>
    )
}