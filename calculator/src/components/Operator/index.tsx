import "./style.css"
import { useCalculatorContext } from "../context";
import { Digit } from "../Digit/index.tsx";

export function Operator(props?: any): React.ReactElement {
    const context = useCalculatorContext();

    const handleClick = () => {
        console.log(`${props.value} clicked`);
        let lastIndex = context.calculation.length===0?0:context.calculation.length - 1;
        if (context.calculation[lastIndex]?.type != "operator" || props.value !== "C" || props.value !== "CE") {
            context.setDisplayedDigits([
                ...context.displayedDigits,
                Digit({
                    key: `Operator-${context.displayedDigits.length}`,
                    value: props.value
                })
            ]);
            props?.func();
            console.log(context?.displayedDigits);
        }
        else if (props.value === "C" || props.value === "CE") {
            props?.func();
            context.setDisplayedDigits([
                ...context.displayedDigits
            ]);
        }
    }
    return (<>
        <button className="operator" onClick={handleClick}>
            {`${props.value}`}
        </button>
    </>)
}