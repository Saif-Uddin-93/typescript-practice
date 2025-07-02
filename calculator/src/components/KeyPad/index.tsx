import "./style.css"
import { createElements } from "../../utils/tools.tsx"
import { Number } from "../Number/index.tsx"
import { Operator } from "../Operator/index.tsx"
// import React from "react"

export function KeyPad(){
    const numbers = 11;
    const operators = 18;

    const numberProps = {
        key: 0,
        number: "0"
    }

    const opBtns = createElements(operators, <Operator />);
    const numBtns = createElements(numbers, <Number />, [], numberProps);

    return (<>
        <div id="keypad">
            {...opBtns}
            {...numBtns}
        </div>
    </>)
}