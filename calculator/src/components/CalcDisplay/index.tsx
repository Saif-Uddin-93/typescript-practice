import "./style.css"
// import { useEffect, useState, useContext } from "react";
import { useCalculatorContext } from "../context"

export function CalcDisplay (){
    const context = useCalculatorContext();
    //|| { displayedDigits: [] };

    // console.log("displayedDigits ", calcContext?.displayedDigits);

    return (<>
        <div id="calc-display">
            { ...context.displayedDigits }
        </div>
    </>)    
}