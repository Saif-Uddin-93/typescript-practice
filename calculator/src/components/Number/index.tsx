import "./style.css"
import { useCalculatorContext } from "../context"
import { Digit } from "../Digit/index.tsx";

export function Number(props?: any): React.ReactElement{
    const context = useCalculatorContext();
    
    const handleClick = () => {
        console.log(`${props.value} clicked`);
        const digit = Digit({
            key: `Number-${context.displayedDigits.length}`,
            type: "number",
            value: props.value});
        context.setDisplayedDigits([...context.displayedDigits, digit]);
        context.setCalculation([...context.calculation, digit])
        console.log(context?.displayedDigits)
    }
    return (<>
        <button className="number" onClick={handleClick}>
            {`${props.value}`}
        </button>
    </>)
}
