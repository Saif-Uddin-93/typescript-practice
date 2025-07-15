import "./style.css"
// import { createElements } from "../../utils/tools.tsx"
import { Number } from "../Number/index.tsx"
import { Operator } from "../Operator/index.tsx"
import "../../utils/mathFunctions.ts"
import { operators } from "../../utils/mathFunctions.ts"

export function KeyPad(){
    const operatorProps = (operator:string, precedence = 0 ) => ({
        value: operator,
        precedence,
        type: "operator",
        func: operators[operator as keyof typeof operators]
    })

    const numberProps = (value:string, precedence = 0 ) => ({
        value,
        precedence,
        type: "number"
    })

    const keys = [
    {
        key: 'e',
        type: 'Operator'
    },
    {
        key: '7',
        type: 'Number'
    }
    ]
    keys.map((keyValue) => {
    const Component = keyValue.type === 'Operator' ? Operator : Number;
    const ComponentProps = keyValue.type === 'Operator' ? operatorProps : numberProps;
        return (
        <Component key={keyValue} {...ComponentProps(keyValue)}/>
        );
    });

    return (<>
        <div id="keypad">
            <Operator key="e" {...operatorProps("e")}/>
            <Operator key="π" {...operatorProps("π")}/>
            <Operator key="(" {...operatorProps("(")}/>
            <Operator key=")" {...operatorProps(")")}/>
            <Operator key="sin" {...operatorProps("sin", 3)}/>
            <Operator key="cos" {...operatorProps("cos", 3)}/>
            <Operator key="tan" {...operatorProps("tan", 3)}/>
            <Operator key="log" {...operatorProps("log", 3)}/>
            <Operator key="ln" {...operatorProps("ln", 3)}/>
            <Operator key="√" {...operatorProps("√", 3)}/>
            <Operator key="x!" {...operatorProps("x!", 3)}/>
            <Operator key="xʸ" {...operatorProps("xʸ", 3)}/>
            <Operator key="+/-" {...operatorProps("+/-")}/>
            <Operator key="%" {...operatorProps("%", 2)}/>
            <Operator key="C" {...operatorProps("C")}/>
            <Operator key="CE" {...operatorProps("CE")}/>
            <Number key="7" {...numberProps("7")}/>
            <Number key="8" {...numberProps("8")}/>
            <Number key="9" {...numberProps("9")}/>
            <Operator key="÷" {...operatorProps("÷", 2)}/>
            <Number key="4" {...numberProps("4")}/>
            <Number key="5" {...numberProps("5")}/>
            <Number key="6" {...numberProps("6")}/>
            <Operator key="×" {...operatorProps("×", 2)}/>
            <Number key="1" {...numberProps("1")}/>
            <Number key="2" {...numberProps("2")}/>
            <Number key="3" {...numberProps("3")}/>
            <Operator key="-" {...operatorProps("-", 1)}/>
            <Number key="0" {...numberProps("0")}/>
            <Number key="." {...numberProps(".")}/>
            <Operator key="=" {...operatorProps("=")}/>
            <Operator key="+" {...operatorProps("+", 2)}/>
        </div>
    </>)
}