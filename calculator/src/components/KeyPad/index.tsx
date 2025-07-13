import "./style.css"
// import { createElements } from "../../utils/tools.tsx"
import { Number } from "../Number/index.tsx"
import { Operator } from "../Operator/index.tsx"
import "../../utils/mathFunctions.ts"
import { operators } from "../../utils/mathFunctions.ts"

export function KeyPad(){
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