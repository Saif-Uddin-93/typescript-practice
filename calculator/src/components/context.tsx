import React from "react";
import { createContext, useEffect, useState } from "react";

type CalcConextProviderProps = {
    children: React.ReactNode;
}

type CalculatorContextType = {
    displayedDigits: React.ReactElement[];
    setDisplayedDigits: React.Dispatch<React.SetStateAction<React.ReactElement[]>>;
};

export const CalculatorContext = createContext<CalculatorContextType | null>(null);

export function CalculatorContextProvider ({children}: CalcConextProviderProps) {
    const [displayedDigits, setDisplayedDigits] = useState<React.ReactElement[]>([]);

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

// export function addDigit(digit : React.ReactElement) {
//     const context = useCalculatorContext();
//     context.setDisplayedDigits([...context.displayedDigits, digit]);
// }

export function useCalculatorContext() {
    const context = React.useContext(CalculatorContext);
    if (!context) {
        throw new Error("useCalculatorContext must be used within a CalculatorContextProvider");
    }
    return context;
}