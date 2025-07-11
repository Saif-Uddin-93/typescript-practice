import "./style.css"
// import { createElements } from "../../utils/tools.tsx"
import { Number } from "../Number/index.tsx"
import { Operator } from "../Operator/index.tsx"
import "../../utils/mathFunctions.ts"
import { useCalculatorContext } from "../context"
import * as mathFuncs from "../../utils/mathFunctions.ts"

export function KeyPad(){
    const context = useCalculatorContext();
    const operators = {
        "C": ()=>{
            // "C" resets the entire calculation (all clear)
            console.log("Clear clicked");
            context.setCalculation([]);
            context.setDisplayedDigits([]);
        },
        "CE": ()=>{
            // "CE" clears the current entry only
            console.log("Clear Entry clicked");
            const displayed = context.displayedDigits.length;
            const currentCalc = context.calculation.length;
            const updatedDigits = context.displayedDigits.slice(currentCalc-1, displayed);
            context.setCalculation(updatedDigits);
            context.setDisplayedDigits([]);
            console.log("Updated calculation array: ", context.calculation);
        },
        "(": ()=>{
            console.log("Left Parenthesis clicked");
        },
        ")": ()=>{
            console.log("Right Parenthesis clicked");
        },
        "×": ()=>{
            console.log("Multiply clicked");
        },
        "-": ()=>{
            console.log("Subtract clicked");
        },
        "+": ()=>{
            console.log("Add clicked");
        },
        "=":()=>{
            mathFuncs.equals();
            console.log("Equals clicked");
        },
        "÷": ()=>{
            console.log("Divide clicked");
        },
        "%":()=>{
            console.log("Percentage clicked");
        },
        "π":()=>{
            console.log("Pi clicked");
        },
        "√":()=>{
            console.log("Square Root clicked");
        }, 
        "x!":()=>{
            console.log("Factorial clicked");
        },
        "xʸ":()=>{
            console.log("Power clicked");
        },
        "ln":()=>{
            console.log("Natural Log clicked");
        },
        "e":()=>{
            console.log("Euler's Number clicked");
        },
        "sin":()=>{
            console.log("Sine clicked");
        },
        "cos":()=>{
            console.log("Cosine clicked");
        },
        "tan":()=>{
            console.log("Tangent clicked");
        },
        "log":()=>{
            console.log("Logarithm clicked");
            // Typically, on a scientific calculator, "log" expects the user to input a number and then press the "log" key to compute log base 10 of that number.
            // For example: input "100", then press "log" to get "2".
            mathFuncs.logarithm(1, 2); // Example usage, replace with actual logic
        },
        "+/-":()=>{
            console.log("Plus/Minus clicked");
        }
    };

    const operatorProps = (operator:string) => ({
        value: operator,
        type: "operator",
        func: operators[operator as keyof typeof operators]
    })

    return (<>
        <div id="keypad">
            <Operator key="e" {...operatorProps("e")}/>
            <Operator key="π" {...operatorProps("π")}/>
            <Operator key="(" {...operatorProps("(")}/>
            <Operator key=")" {...operatorProps(")")}/>
            <Operator key="sin" {...operatorProps("sin")}/>
            <Operator key="cos" {...operatorProps("cos")}/>
            <Operator key="tan" {...operatorProps("tan")}/>
            <Operator key="log" {...operatorProps("log")}/>
            <Operator key="ln" {...operatorProps("ln")}/>
            <Operator key="√" {...operatorProps("√")}/>
            <Operator key="x!" {...operatorProps("x!")}/>
            <Operator key="xʸ" {...operatorProps("xʸ")}/>
            <Operator key="+/-" {...operatorProps("+/-")}/>
            <Operator key="%" {...operatorProps("%")}/>
            <Operator key="C" {...operatorProps("C")}/>
            <Operator key="CE" {...operatorProps("CE")}/>
            <Number key="7" value="7"/>
            <Number key="8" value="8"/>
            <Number key="9" value="9"/>
            <Operator key="÷" {...operatorProps("÷")}/>
            <Number key="4" value="4"/>
            <Number key="5" value="5"/>
            <Number key="6" value="6"/>
            <Operator key="×" {...operatorProps("×")}/>
            <Number key="1" value="1"/>
            <Number key="2" value="2"/>
            <Number key="3" value="3"/>
            <Operator key="-" {...operatorProps("-")}/>
            <Number key="0" value="0"/>
            <Number key="." value="."/>
            <Operator key="=" {...operatorProps("=")}/>
            <Operator key="+" {...operatorProps("+")}/>
        </div>
    </>)
}