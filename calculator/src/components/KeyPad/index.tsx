import "./style.css"
// import { createElements } from "../../utils/tools.tsx"
import { Number } from "../Number/index.tsx"
import { Operator } from "../Operator/index.tsx"
import "../../utils/mathFunctions.ts"
import { useCalculatorContext } from "../context"
import * as mathfuncs from "../../utils/mathFunctions.ts"
// import React from "react"

export function KeyPad(){
    // const numbers = 11;
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
            mathfuncs.sortCalculation(context.calculation);
        },
        "=":()=>{
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
        },
        "+/-":()=>{
            console.log("Plus/Minus clicked");
        }
    };

    // const numberProps = {
    //     key: 0,
    //     number: "0"
    // }

    // const operatorProps = {
    //     key: 0,
    //     operator: ""
    // }

    // const opBtns = createElements(operators.length, <Operator />);
    // const numBtns = createElements(numbers, <Number />, [], numberProps);
    const operatorProps = (operator:string) => ({
        value: operator,
        func: operators[operator as keyof typeof operators]
    })

    return (<>
        <div id="keypad">
            {/* {...opBtns} */}
            {/* <section id="number-btns">  */}
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
            <Number key="7" number="7"/>
            <Number number="8"/>
            <Number number="9"/>
            <Operator key="÷" {...operatorProps("÷")}/>
            <Number number="4"/>
            <Number number="5"/>
            <Number number="6"/>
            <Operator key="×" {...operatorProps("×")}/>
            <Number number="1"/>
            <Number number="2"/>
            <Number number="3"/>
            <Operator key="-" {...operatorProps("-")}/>
            <Number number="0"/>
            <Number number="."/>
            <Operator key="=" {...operatorProps("=")}/>
            <Operator key="+" {...operatorProps("+")}/>
            {/* </ section> */}
        </div>
    </>)
}