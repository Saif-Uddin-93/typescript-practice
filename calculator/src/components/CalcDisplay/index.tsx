import "./style.css"
import { useCalculatorContext } from "../context"
import { Digit } from "../Digit/index.tsx";

export function CalcDisplay (){
    const context = useCalculatorContext();
    const totalDigit = Digit({
        key: `total-digit`,
        value: context.total
    });
    return (<>
        <div id="calc-display">
            <div id="display-container">
                { context.displayedDigits === undefined || context.displayedDigits.length === 0 ? totalDigit  : null }
                { context.displayedDigits.length < 17 ? context.displayedDigits : context.displayedDigits.slice(context.displayedDigits.length-16, context.displayedDigits.length) }
            </div>
        </div>
    </>)    
}