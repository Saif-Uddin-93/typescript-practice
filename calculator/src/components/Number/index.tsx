import "./style.css"
import { useCalculatorContext } from "../context"
import { Digit } from "../Digit/index.tsx";

export function Number(props?: any): React.ReactElement{
    const context = useCalculatorContext();
    
    const handleClick = () => {
        console.log(`${props.value} clicked`);
        context.setDisplayedDigits([...context.displayedDigits, Digit({
            key: `Number-${context.displayedDigits.length}`,
            type: "number",
            value: props.value})]);
        console.log(context?.displayedDigits)
    }
    return (<>
        <button className="number" onClick={handleClick}>
            {`${props.value}`}
        </button>
    </>)
}
