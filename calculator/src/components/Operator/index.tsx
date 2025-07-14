import "./style.css"
import { useCalculatorContext } from "../context";
import { Digit } from "../Digit/index.tsx";

export function Operator(props?: any): React.ReactElement {
    const context = useCalculatorContext();

    const handleClick = () => {
        console.log(`${props.value} clicked`);
        const digit = Digit({
            key: `Operator-${context.displayedDigits.length}`,
            type: "operator",
            value: props.value});
        let lastIndex = context.calculation.length - 1;
        if (context.calculation[lastIndex]?.type != "operator" || props.value !== "C" || props.value !== "CE") {
            context.setDisplayedDigits([
                ...context.displayedDigits,
                digit
            ]);
            props?.func();
            console.log(context?.displayedDigits);
        }
        else if (props.value === "C" || props.value === "CE") {
            props?.func();
        }
    }
    return (<>
        <button className="operator" onClick={handleClick}>
            {`${props.value}`}
        </button>
    </>)
}