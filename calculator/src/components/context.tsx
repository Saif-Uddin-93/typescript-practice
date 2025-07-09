import React from "react";
import { createContext, useState } from "react";

type CalcContextProviderProps = {
    children: React.ReactNode;
}

type CalculatorContextType = {
    displayedDigits: React.ReactElement[];
    setDisplayedDigits: React.Dispatch<React.SetStateAction<React.ReactElement[]>>;
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    calculation: any[];
    setCalculation: React.Dispatch<React.SetStateAction<any[]>>;
};

export const CalculatorContext = createContext<CalculatorContextType | null>(null);

export function CalculatorContextProvider ({children}: CalcContextProviderProps) {
    const [displayedDigits, setDisplayedDigits] = useState<React.ReactElement[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [calculation, setCalculation] = useState<any[]>([]);
    const memoizedDisplayedDigits = React.useMemo(() => ({
            displayedDigits, 
            setDisplayedDigits,
            total,
            setTotal,
            calculation,
            setCalculation,
        }),
        [displayedDigits, setDisplayedDigits, total, setTotal, calculation, setCalculation]
    );

    return(
        <CalculatorContext.Provider 
            value={
            // {
            //     displayedDigits,
            //     setDisplayedDigits
            // }
            memoizedDisplayedDigits
            }>
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