import "./style.css"
import { useCalculatorContext } from "../context";
import { Digit } from "../Digit/index.tsx";

export function Operator(props?: any): React.ReactElement {
    const context = useCalculatorContext();

    const handleClick = () => {
        console.log(`${props.value} clicked`);
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
    return (<>
        <button className="operator" onClick={handleClick}>
            {`${props.value}`}
        </button>
    </>)
}