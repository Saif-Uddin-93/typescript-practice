import { createContext, useContext, useEffect, useState } from "react";

const CalculatorContext = createContext();
const CalculatorUpdateContext = createContext();

export function useCalculatorContext(){
    return useContext(CalculatorContext)
}

export function useCalculatorUpdateContext(){
    return useContext(CalculatorUpdateContext)
}

export function CalculatorProvider ({ children }) {

    function toggleLoggedIn(){
        setLoggedIn((loggedIn)=>!loggedIn);
        setLocal("skills-tracker", userDB);
    }

    useEffect(()=>{
        if(loggedIn){
            setUser(userDB.currentUser);
        }else{
            setUser("");
        }
    }, [loggedIn])

    return(
        <CalculatorContext.Provider value={{loggedIn, user}}>
            <CalculatorUpdateContext.Provider value={toggleLoggedIn}>
                {children}
            </CalculatorUpdateContext.Provider>
        </CalculatorContext.Provider>
    )
}