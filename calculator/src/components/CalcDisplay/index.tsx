import "./style.css"
import { useCalculatorContext } from "../context"

export function CalcDisplay (){
    const context = useCalculatorContext();

    return (<>
        <div id="calc-display">
            { ...context.displayedDigits }
        </div>
    </>)    
}