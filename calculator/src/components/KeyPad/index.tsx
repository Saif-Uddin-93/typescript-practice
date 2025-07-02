import "./style.css"
// import { createElements } from "../../utils/tools.tsx"
import { Number } from "../Number/index.tsx"
import { Operator } from "../Operator/index.tsx"
// import React from "react"

export function KeyPad(){
    // const numbers = 11;
    // const operators = [
    //     "C", "CE", "(", ")",
    //     "×", "-", "+", "=",
    //     "÷", "%", "π", "√", 
    //     "x!", "xʸ", "ln", "e",
    //     "sin", "cos", "tan", "log",
    //     "+/-"
    // ];

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

    return (<>
        <div id="keypad">
            {/* {...opBtns} */}
            {/* <section id="number-btns">  */}
            <Operator operator="e" />
            <Operator operator="π" />
            <Operator operator="(" />
            <Operator operator=")" />
            <Operator operator="sin" />
            <Operator operator="cos" />
            <Operator operator="tan" />
            <Operator operator="log" />
            <Operator operator="ln" />
            <Operator operator="√" />
            <Operator operator="x!" />
            <Operator operator="xʸ" />
            <Operator operator="+/-" />
            <Operator operator="%" />
            <Operator operator="C" />
            <Operator operator="CE" />
            <Number number="7" />
            <Number number="8" />
            <Number number="9" />
            <Operator operator="÷" />
            <Number number="4" />
            <Number number="5" />
            <Number number="6" />
            <Operator operator="×" />
            <Number number="1" />
            <Number number="2" />
            <Number number="3" />
            <Operator operator="-" />
            <Number number="0" />
            <Number number="." />
            <Operator operator="=" />
            <Operator operator="+" />
            {/* </ section> */}
        </div>
    </>)
}