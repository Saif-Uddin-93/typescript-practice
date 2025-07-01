import "./style.css"
import { createElements } from "../../utils/tools.tsx"
import { Number } from "../Number/index.tsx"
import { Operator } from "../Operator/index.tsx"

export function KeyPad(){
    const numbers = 11
    const operators = 18;

    const numBtns = createElements(numbers, <Number />, )

    return (<>
        <div id="keypad">

        </div>
    </>)
}