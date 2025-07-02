import "./style.css"
import { createElements } from "../../utils/tools.tsx"
import { Number } from "../Number/index.tsx"
import { Operator } from "../Operator/index.tsx"
// import React from "react"

export function KeyPad(){
    const numbers = 11;
    const operators = [
        "C", "CE", "(", ")",
        "×", "-", "+", "=",
        "÷", "%", "π", "√", 
        "x!", "xʸ", "ln", "e",
        "sin", "cos", "tan", "log",
    ];

    const numberProps = {
        key: 0,
        number: "0"
    }

    const opBtns = createElements(operators.length, <Operator />);
    const numBtns = createElements(numbers, <Number />, [], numberProps);

    return (<>
        <div id="keypad">
            {...opBtns}
            {/* <section id="number-btns">  */}
            {numBtns[7]}
            {numBtns[8]}
            {numBtns[9]}
            {numBtns[4]}
            {numBtns[5]}
            {numBtns[6]}
            {numBtns[1]}
            {numBtns[2]}
            {numBtns[3]}
            {numBtns[0]}
            {numBtns[10]}
            {/* </ section> */}
        </div>
    </>)
}