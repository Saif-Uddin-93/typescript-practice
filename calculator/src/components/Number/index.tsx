import "./style.css"
import { useCalculatorContext } from "../context"
import { Digit } from "../Digit/index.tsx";

export function Number(props?: any): React.ReactElement{
    const context = useCalculatorContext();
    
    const handleClick = () => {
        console.log(`${props.number} clicked`);
        context.setDisplayedDigits([...context.displayedDigits, Digit({
            key: `Digit-${context.displayedDigits.length}`,
            value: props.number})]);
        console.log(context?.displayedDigits)
    }
    return (<>
        <button className="number" onClick={handleClick}>
            {`${props.number}`}
        </button>
    </>)
}

