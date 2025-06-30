import "./style.css"
import { CalcDisplay } from "../CalcDisplay/index.tsx"
import { KeyPad } from "../KeyPad/index.tsx"

export function CalcBody () {
    return (<>
        <div id="calc-body">
            <CalcDisplay></CalcDisplay>
            <KeyPad></KeyPad>
        </div>
    </>)
};